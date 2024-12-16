'use client'
import React, { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, FileText, AlertTriangle,  RefreshCw } from 'lucide-react'
import pdfToText from "react-pdftotext";
interface Conflict {
  text: string;
  doc1: string;
  doc2: string;
}

interface Results {
  conflictLevel: 'normal' | 'medium' | 'danger';
  conflicts: Conflict[];
}

const ConflictCheckComponent: React.FC = () => {
  const [document1, setDocument1] = useState<string>('');
  const [document2, setDocument2] = useState<string>('');
  const [results, setResults] = useState<Results | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>, docNum: 1 | 2) => {
    const file = e.target.files?.[0];
    if (file) {
      pdfToText(file)
        .then((text) => {
          if(docNum===1){
            setDocument1(text)
          }else{
            setDocument2(text)
          }
        })
        .catch((error) => console.error("Failed to extract text from pdf"+error));
    
      
    }
  };

async function compareDocuments(){
  setIsLoading(true)
  try {
    const response = await fetch('/api/ai/conflictCheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ document1: document1,document2:document2 }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate haiku');
    }

    const data = await response.json();
    setResults(JSON.parse(data.results.text));
    console.log(data.results.text)
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
}

  const getConflictLevelColor = (level: Results['conflictLevel']): string => {
    switch (level) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'danger': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className=" bg-gray-50 p-12 min-h-screen ">
      <h1 className="text-3xl text-slate-800 font-bold mb-6"><span className='text-indigo-500'>Conqr</span> AI Conflict Check</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Choose a Document</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className='bg-indigo-500 hover:bg-indigo-600' onClick={() => document.getElementById('file1')?.click()}>
                <Upload className="mr-2 h-4 w-4" /> Upload File
              </Button>
              <input
                id="file1"
                type="file"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 1)}
              />
              <Textarea
                placeholder="Paste your text here..."
                value={document1}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDocument1(e.target.value)}
                className="h-64"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Choose a Document</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className='bg-indigo-500 hover:bg-indigo-600' onClick={() => document.getElementById('file2')?.click()}>
                <Upload className="mr-2 h-4 w-4" /> Upload File
              </Button>
              <input
                id="file2"
                type="file"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 2)}
              />
              <Textarea
                placeholder="Paste your text here..."
                value={document2}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDocument2(e.target.value)}
                className="h-64"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex justify-center">
        <Button className='bg-indigo-600 hover:bg-indigo-800' onClick={compareDocuments} disabled={isLoading || !document1 || !document2}>
          {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
          {isLoading ? 'Analyzing...' : 'Check Conflicts'}
        </Button>
      </div>
      {results && (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Conflict Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.conflicts.map((conflict, index) => (
                    <Alert key={index}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>{conflict.text}</AlertTitle>
                      <AlertDescription>
                       
                        <p className="mt-2 text-red-500"><span className="font-medium">Document 1:</span > {conflict.doc1}</p>
                        <p className='text-red-800'><span className="font-medium">Document 2:</span> {conflict.doc2}</p>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className={`p-2 rounded-md ${getConflictLevelColor(results.conflictLevel)}`}>
                    <p className="font-semibold">Conflict Level: {results.conflictLevel.charAt(0).toUpperCase() + results.conflictLevel.slice(1)}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Total Conflicts: {results.conflicts.length}</p>
                  </div>
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 gap-2">
                    {/* <Check className="mr-2 h-4 w-4" /> */}
                    <span className="material-symbols-rounded text-xl">
psychology_alt
</span>
                     Take AI Suggestions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      {
        results?.conflicts.length===0 && <div className=" w-full">
          <p className='text-xl w-fit mx-auto font-semibold'>No conflict found, Please try again</p>
        </div>
      }
    </div>
  );
};

export default ConflictCheckComponent;