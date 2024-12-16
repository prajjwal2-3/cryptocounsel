"use client";

import React, { useState, ChangeEvent } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FormatSummary } from './Formatsummary';
import { Textarea } from "@/components/ui/textarea";
import pdfToText from 'react-pdftotext';
import { Input } from '../ui/input';
import { Upload } from 'lucide-react';
import { sum } from '@/data/sum';
const LegalSummary: React.FC = () => {
  const [summary, setSummary] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [documentText, setDocumentText] = useState('');

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      try {
        const text = await pdfToText(selectedFile);
        setDocumentText(text);
      } catch (error) {
        console.error("Failed to extract text from pdf:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSummary('');

    try {
      const response = await fetch('/api/ai/legal-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  documentText }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      console.log('API Response:', data.results.text);
      setSummary(data.results.text);
    } catch (error) {
      console.error("Failed to generate summary:", error);
      setSummary('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl text-slate-800 font-bold mb-6"><span className='text-indigo-500'>Conqr AI</span> Document Summary</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Choose a Document</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* <Button className='bg-indigo-500 hover:bg-indigo-600' onClick={() => document.getElementById('file-upload')?.click()}>
              <Upload className="mr-2 h-4 w-4" /> Upload File
            </Button> */}
            <Input type="file" accept="application/pdf"  onChange={handleFileUpload} />
          </div>
        </CardContent>
      </Card>

      <Button type="submit" onClick={handleSubmit} disabled={loading||documentText===''} className="mt-6 bg-indigo-500 hover:bg-indigo-600">
        {loading ? 'Generating Summary...' : 'Generate Summary'}
      </Button>
      
      {summary && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Legal Document Summary</CardTitle>
            <CardDescription>Comprehensive analysis of the provided document</CardDescription>
          </CardHeader>
          <CardContent>
            {FormatSummary(summary)}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LegalSummary;
