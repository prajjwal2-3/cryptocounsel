'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertCircle } from 'lucide-react';
import pdfToText from "react-pdftotext";
import { useUserStore } from '@/store/userstore';
import { useDocumentStore } from '@/store/documentStore';
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();
type DocumentGroup = 'Created documents'|'Pending Approval'|'Shared documents'|'Pending Signature';
interface User {
  id: string;
  name: string;
  color: string;
  position: string;
}
type Document = {
  title: string;
  Type: string;
  created_on: string;
  created_by: string;
  user_color: string;
  file_key: string;
};
const DocumentUploadDialog = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const [progress, setProgress] = useState<DocumentGroup | ''>('');
  const [user, setUser] = useState<User>({
    id:'jbkjgr',
    name:'prajjwal',
    color:'rgfeg',
    position:'ioherg'
  });
  const [extractedText, setExtractedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const { users } = useUserStore();
  const { documents ,addDocument} = useDocumentStore();

  const { startUpload, isUploading } = useUploadThing("pdfUploader");

  useEffect(() => {
    function getAllDocumentTypes(documentData: typeof documents): void {
      const typeSet = new Set<string>();
    
      documentData.forEach(group => {
        group.documentlist.forEach(doc => {
          if (doc.Type) {
            typeSet.add(doc.Type);
          }
        });
      });
      setTypes(Array.from(typeSet).sort());
    }

    getAllDocumentTypes(documents);
  }, [documents]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      extractText(selectedFile);
    }
  };

  const extractText = async (file: File) => {
    if (file) {
      try {
        const text = await pdfToText(file);
        setExtractedText(text);
      } catch (error) {
        console.error("Failed to extract text from pdf: " + error);
      }
    }
  };

  const handleAITypeDetection = async () => {
    if (!extractedText) {
      alert('Please upload a document first');
      return;
    }
  
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai/type-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ extractedText }),
      });
      if (!response.ok) {
        throw new Error('Failed to generate type');
      }     
      const type = await response.json();
      console.log(type.type.text);
      setTypes(prevTypes => {
        if (!prevTypes.includes(type.type.text)) {
          return [...prevTypes, type.type.text].sort();
        }
        return prevTypes;
      });
      setDocumentType(type.type.text);
    } catch (error) {
      console.error('Error detecting document type:', error);
    } finally {
      setIsLoading(false);
    }
  };
  function getGroupIndex(group: string): number {
    switch (group) {
        case 'Created documents':
            return 0;
        case 'Pending Approval':
            return 1;
        case 'Shared documents':
            return 2;
        case 'Pending Signature':
            return 3;
        default:
            throw new Error('Invalid group name');
    }
}
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    if (!title || !documentType || !progress) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const uploadedFiles = await startUpload([file]);
      if (uploadedFiles && uploadedFiles[0]) {
        setFileUrl(uploadedFiles[0].key);
        console.log("PDF uploaded successfully. URL:", uploadedFiles[0]);
        console.log(user)
        const document:Document = {
          title:title,
          created_by:user.name,
          user_color:user.color,
          file_key:uploadedFiles[0].key,
          created_on:Date.now().toLocaleString(),
          Type:documentType
        }
        console.log(document)
         addDocument(getGroupIndex(progress),document)
        alert('Document uploaded successfully!');
        // Reset the form
        setTitle('');
        setFile(null);
        setDocumentType('');
        setProgress('');
        setFileUrl('');
        setExtractedText('');
      }
    } catch (error) {
      console.error("Failed to upload PDF:", error);
      alert('Failed to upload document. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="conqr">Add Document</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file" className="text-right">
              File
            </Label>
            <div className="col-span-3">
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
              />
              {file && <p className="mt-2 text-sm text-gray-500">{file.name}</p>}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Select value={documentType} onValueChange={(value) => setDocumentType(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((e, index) =>
                  <SelectItem key={index} value={e}>{e}</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-4">
              <Button 
                onClick={handleAITypeDetection} 
                disabled={isLoading || !file}
                className="w-full"
                variant='conqr'
              >
                {isLoading ? 'Detecting...' : 'Detect Type with AI'}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="progress" className="text-right">
              Status
            </Label>
            <Select value={progress} onValueChange={(value: DocumentGroup) => setProgress(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Created documents">Created documents</SelectItem>
                <SelectItem value="Pending Approval">Pending Approval</SelectItem>
                <SelectItem value="Shared documents">Shared documents</SelectItem>
                <SelectItem value="Pending Signature">Pending Signature</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdBy" className="text-right">
              Created By
            </Label>
            <Select value={user.name} onValueChange={(selectedName) => {
      const selectedUser = users.find(u => u.name === selectedName);
      if (selectedUser) {
        setUser(selectedUser);
      }
    }}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select creator" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.name}>
                    <div className="flex items-center">
                      <div style={{backgroundColor: user.color}} className="w-6 h-6 rounded-full flex justify-center text-center text-white items-center mr-2">
                        {user.name.charAt(0)}
                      </div>
                      {user.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleUpload} disabled={isLoading || isUploading} variant="conqr">
            {isLoading || isUploading ? 'Uploading...' : 'Upload'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentUploadDialog;