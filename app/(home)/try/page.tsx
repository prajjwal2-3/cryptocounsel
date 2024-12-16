

"use client";

import { useState,ChangeEvent, JSX } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import pdfToText from "react-pdftotext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, AlertTriangle, Check, RefreshCw } from 'lucide-react'
export default function Home() {
  const [document1, setDocument1] = useState('');
  const [document2, setDocument2] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/ai/conflict-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document1, document2 }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setResult(data.results.text);
      
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const formatResult = (result: string) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(result, "text/xml");
  
    const formatSection = (sectionName: string, content: string | JSX.Element) => {
        return (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3 text-blue-600">{sectionName}</h2>
            <div className="pl-4 border-l-4 border-blue-200">
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
          </div>
        );
      };
      
  
    const formatConflict = (conflict: Element) => {
      const severity = conflict.querySelector('severity')?.textContent;
      const severityColor = 
        severity === '1' ? 'bg-green-100' :
        severity === '2' ? 'bg-yellow-100' :
        severity === '3' ? 'bg-orange-100' :
        severity === '4' ? 'bg-red-100' :
        'bg-red-200';
  
      return (
        <div className={`mb-4 p-4 rounded ${severityColor}`}>
          <h3 className="text-lg font-semibold mb-2">{conflict.querySelector('nature')?.textContent}</h3>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <h4 className="font-semibold">Document 1:</h4>
              <p className="italic">{conflict.querySelector('document1_excerpt')?.textContent}</p>
            </div>
            <div>
              <h4 className="font-semibold">Document 2:</h4>
              <p className="italic">{conflict.querySelector('document2_excerpt')?.textContent}</p>
            </div>
          </div>
          <p><strong>Legal Implications:</strong> {conflict.querySelector('legal_implications')?.textContent}</p>
          <p><strong>Resolution Suggestions:</strong> {conflict.querySelector('resolution_suggestions')?.textContent}</p>
          <p><strong>Severity:</strong> {severity}/5</p>
        </div>
      );
    };
  
    return (
      <div className="conflict-report">
        {formatSection("Summary", xmlDoc.querySelector('summary')?.textContent || '')}
        
        {formatSection("Conflict Assessment", (
          <div>
            {Array.from(xmlDoc.querySelectorAll('conflict')).map((conflict, index) => (
              <div key={index}>{formatConflict(conflict)}</div>
            ))}
          </div>
        ))}
        
        {formatSection("Overall Conflict Level", xmlDoc.querySelector('overall_conflict_level')?.textContent || '')}
        
        {formatSection("Critical Conflicts Summary", xmlDoc.querySelector('critical_conflicts_summary')?.textContent || '')}
        
        {formatSection("Recommendations", xmlDoc.querySelector('recommendations')?.textContent || '')}
        
        {formatSection("Additional Considerations", xmlDoc.querySelector('additional_considerations')?.textContent || '')}
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Legal Document Conflict Check</h1>
     
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
        <Button type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Processing...' : 'Check for Conflicts'}
        </Button>
    
        {result && (
  <Card className="mt-8">
    <CardHeader>
      <CardTitle>Conflict Check Report</CardTitle>
      <CardDescription>Analysis of potential conflicts between the provided documents</CardDescription>
    </CardHeader>
    <CardContent>
      {formatResult(result)}
    </CardContent>
  </Card>
)}

    </div>
  );
}
