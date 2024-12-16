'use client'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ url,title }: { url: string,title:string|null }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return Math.max(1, Math.min(newPageNumber, numPages));
    });
  }

  return (
    <Card className="w-10/12 mt-10 h-[680px] bg-indigo-400 shadow-lg overflow-hidden flex flex-col">
      <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold tracking-tighter  w-4/12 ">{title}</h2>
        <div className="   w-4/12 flex justify-center space-x-4 ">
        <Button
          variant="outline"
          size="icon"
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
          className="bg-transparent hover:bg-indigo-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => changePage(1)}
          disabled={pageNumber >= numPages}
          className="bg-transparent hover:bg-indigo-100"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
        <div className="text-sm w-4/12 text-right font-medium">
          Page {pageNumber} of {numPages}
        </div>
      </div>

      <div className="flex-grow relative flex items-center justify-center bg-indigo-100 overflow-auto">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-indigo-200 bg-opacity-75 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        )}
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          className="absolute inset-0"
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={980} // Slightly smaller than container to allow for scrollbar
            className="mt-4"
          />
        </Document>
      </div>
      
      
    </Card>
  );
}