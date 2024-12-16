'use client'
import React, { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, FileText, AlertTriangle, Check, RefreshCw } from 'lucide-react'
import pdfToText from "react-pdftotext";

interface GapAnalysisResult {
  structuralGaps: {
    description: string;
    doc1?: string;
    doc2?: string;
  }[];
  commonProvisionGaps: {
    provision: string;
    description: string;
    doc1: string;
    doc2: string;
  }[];
  additionalProvisions: {
    document: "Document1" | "Document2";
    provision: string;
    description: string;
  }[];
  overlaps: {
    provision: string;
    description: string;
  }[];
  conclusion: {
    betterProtection: "Document1" | "Document2";
    greaterFlexibility: "Document1" | "Document2";
    lessCompliance: "Document1" | "Document2";
    lesserLiability: "Document1" | "Document2";
    explanation: string;
  };
}

const GapAnalysis: React.FC = () => {
  const [document1, setDocument1] = useState<string>('');
  const [document2, setDocument2] = useState<string>('');
  const [results, setResults] = useState<GapAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>, docNum: 1 | 2) => {
    const file = e.target.files?.[0];
    if (file) {
      pdfToText(file)
        .then((text) => {
          if(docNum === 1) {
            setDocument1(text)
          } else {
            setDocument2(text)
          }
        })
        .catch((error) => console.error("Failed to extract text from pdf: " + error));
    }
  };

  async function performGapAnalysis() {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai/gap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document1, document2 }),
      });

      if (!response.ok) {
        throw new Error('Failed to perform gap analysis');
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

  return (
    <div className="bg-gray-50 p-12 min-h-screen">
      <h1 className="text-3xl text-slate-800 font-bold mb-6"><span className='text-indigo-500'>Conqr</span> AI Gap Analysis</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((docNum) => (
          <Card key={docNum}>
            <CardHeader>
              <CardTitle>Document {docNum}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className='bg-indigo-500 hover:bg-indigo-600' onClick={() => document.getElementById(`file${docNum}`)?.click()}>
                  <Upload className="mr-2 h-4 w-4" /> Upload File
                </Button>
                <input
                  id={`file${docNum}`}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, docNum as 1 | 2)}
                />
                <Textarea
                  placeholder="Paste your text here..."
                  value={docNum === 1 ? document1 : document2}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => docNum === 1 ? setDocument1(e.target.value) : setDocument2(e.target.value)}
                  className="h-64"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button className='bg-indigo-600 hover:bg-indigo-800' onClick={performGapAnalysis} disabled={isLoading || !document1 || !document2}>
          {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
          {isLoading ? 'Analyzing...' : 'Perform Gap Analysis'}
        </Button>
      </div>
      {results && (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Gap Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {['structuralGaps', 'commonProvisionGaps', 'additionalProvisions', 'overlaps'].map((section) => (
                    <div key={section}>
                      <h3 className="text-lg font-semibold mb-2">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                      {
                      // @ts-ignore
                      results[section as keyof GapAnalysisResult].map((item: any, index: number) => (
                        <Alert key={index} className="mb-2">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertTitle>{item.provision || item.description}</AlertTitle>
                          <AlertDescription>
                            {item.description && <p>{item.description}</p>}
                            {item.doc1 && <p className="mt-2 text-blue-500"><span className="font-medium">Document 1:</span> {item.doc1}</p>}
                            {item.doc2 && <p className="text-green-500"><span className="font-medium">Document 2:</span> {item.doc2}</p>}
                          </AlertDescription>
                        </Alert>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Conclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(results.conclusion).map(([key, value]) => (
                    <div key={key} className="p-2 rounded-md bg-gray-100">
                      <p className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</p>
                    </div>
                  ))}
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 gap-2">
                    <span className="material-symbols-rounded text-xl">psychology_alt</span>
                    Generate Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default GapAnalysis;