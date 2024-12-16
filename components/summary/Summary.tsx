// @ts-nocheck
'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import pdfToText from "react-pdftotext";
import { ScrollArea } from '../ui/scroll-area';
import SummaryCard from './SummaryCard';


export default function Summary() {
  const [extractedText, setExtractedText] = useState<string>('');
  const [haiku, setHaiku] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  function extractText(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      pdfToText(file)
        .then((text) => setExtractedText(text))
        .catch((error) => console.error("Failed to extract text from pdf"+error));
    }
  }

  async function generateHaiku() {
    if (!extractedText) return;

    setIsGenerating(true);
    try {
      const response = await fetch('/api/ai/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: extractedText }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate haiku');
      }

      const data = await response.json();
      setHaiku(data.summary.text);
     
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="space-y-4 min-h-screen py-12 px-6">
      <p className='font-semibold text-3xl text-slate-800'><span className='text-indigo-400'>Conqr</span> AI Document Summary</p>
    <Card className="">
      <CardHeader>
        <CardTitle>Upload the entire agreement (in PDF format)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input type="file" accept="application/pdf"  onChange={extractText} />
          
        
            <Button onClick={generateHaiku} className='bg-indigo-500 hover:bg-indigo-600' disabled={!extractedText||isGenerating}>
              {isGenerating ? 'Generating...' : 'Generate Summary'}
            </Button>
         
        </div>
      
      
        {haiku && <SummaryCard summary={JSON.parse(haiku)} />}
      </CardContent>
      
    </Card>

   
  </div>
  )
}
