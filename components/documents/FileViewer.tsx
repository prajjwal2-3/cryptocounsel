'use client'
import React, { useState, useMemo } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Grid, List, SortAsc, SortDesc } from "lucide-react"
import Dialogconflict from '@/components/documents/Dialogconflict'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { useDocumentStore } from '@/store/documentStore'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { document } from '@/data/document'
import { format } from 'path'

const FileViewer = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [createdByFilter, setCreatedByFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [layout, setLayout] = useState('horizontal')
  const [sortOrder, setSortOrder] = useState('newest')
  const {documents} = useDocumentStore()

  const allDocuments = useMemo(() => documents.flatMap(section => section.documentlist), [documents])
  function formatLocaleDateString(dateString:string) {
    const correctFormatRegex = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
    if (correctFormatRegex.test(dateString)) {
      return dateString; 
    }
    const cleanDateString = dateString.replace(/,/g, '');
    const timestamp = parseInt(cleanDateString, 10);
    if (!isNaN(timestamp)) {
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = String(date.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }
  const filteredAndSortedDocuments = useMemo(() => {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('/').map(Number);
    
      const fullYear = year + (year < 100 ? 2000 : 0);
      return new Date(fullYear, month - 1, day).getTime();
    };
  
    return documents.map(section => ({
      ...section,
      documentlist: section.documentlist
        .filter(doc =>
          doc.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (typeFilter === 'all' || doc.Type === typeFilter) &&
          (createdByFilter === 'all' || doc.created_by === createdByFilter) &&
          (statusFilter === 'all' || section.type === statusFilter)
        )
        .sort((a, b) => {
          const dateA = parseDate(formatLocaleDateString(a.created_on));
          const dateB = parseDate(formatLocaleDateString(b.created_on));
          return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        })
    }));
  }, [documents, searchTerm, typeFilter, createdByFilter, statusFilter, sortOrder]);

  const uniqueTypes = useMemo(() => ['all', ...Array.from(new Set(allDocuments.map(doc => doc.Type)))], [allDocuments])
  const uniqueCreators = useMemo(() => ['all', ...Array.from(new Set(allDocuments.map(doc => doc.created_by)))], [allDocuments])

 

  return (
    <div className="p-4">
      <div className="mb-4 flex space-x-2 ml-auto w-8/12">
        <Input 
          placeholder="Search documents..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-64'
        />
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            {uniqueTypes.map(type => (
              <SelectItem key={type} value={type}>{type === 'all' ? 'All types' : type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={createdByFilter} onValueChange={setCreatedByFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by creator" />
          </SelectTrigger>
          <SelectContent>
            {uniqueCreators.map(creator => (
              <SelectItem key={creator} value={creator}>{creator === 'all' ? 'All creators' : creator}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {document.map(section => (
              <SelectItem key={section.type} value={section.type}>{section.type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="bg-indigo-500 hover:bg-indigo-600" onClick={() => setLayout(layout === 'horizontal' ? 'vertical' : 'horizontal')}>
          {layout === 'horizontal' ? <Grid size={20} /> : <List size={20} />}
        </Button>
        <Button 
          className="bg-indigo-500 hover:bg-indigo-600" 
          onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
        >
          {sortOrder === 'newest' ? <SortDesc size={20} /> : <SortAsc size={20} />}
        </Button>
      </div>
      <div className={`flex ${layout === 'horizontal' ? 'flex-row' : 'flex-col'} gap-4`}>
        {filteredAndSortedDocuments.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`flex-1 rounded-lg p-2 shadow-inner ${
            section.type === "Created documents"
              ? "bg-blue-300/50"
              : section.type === "Pending Approval"
              ? "bg-pink-200/50"
              : section.type === "Shared documents"
              ? "bg-violet-400/50"
              : section.type === "Pending Signature"
              ? "bg-rose-400/40"
              : ""
          }`}>
            <h2 className={`text-xl font-bold mb-2 ${
            section.type === "Created documents"
              ? "text-blue-400"
              : section.type === "Pending Approval"
              ? "text-pink-300"
              : section.type === "Shared documents"
              ? "text-violet-500"
              : section.type === "Pending Signature"
              ? "text-rose-500"
              : ""
          }`} style={{ padding: '0.5rem'}}>
              {section.type}
            </h2>
            <ScrollArea className={layout === 'horizontal' ? "h-screen" : "h-[300px]"}>
              <div className={`grid ${layout === 'horizontal' ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
                {section.documentlist.map((doc, index) => (
                  <div
                    key={index + 1000}
                    className="rounded-lg p-2 section-3 bg-white shadow-md"
                  >
                    <section className="flex justify-between">
                      <section className="text-sm font-semibold w-10/12">{doc.title}</section>
                    </section>
                    <section className="my-2">
                      <section className="text-black/40 text-xs font-semibold">
                        Type
                        <span className="px-1 font-semibold text-black/70">
                          {doc.Type}
                        </span>
                      </section>
                      <section className="text-black/40 text-xs font-semibold">
                        Created on
                        <span className="px-1 font-semibold text-black/70">
                        {formatLocaleDateString(doc.created_on)}
                        </span>
                      </section>
                    </section>
                    <Separator />
                    <section className="flex justify-between items-center text-sm my-2">
                      <section className="flex">
                        <section className="px-1 flex gap-2 items-center font-semibold text-black/70">
                         <span style={{backgroundColor:doc.user_color}} className='w-6 h-6 flex items-center justify-center text-white rounded-full'>{doc.created_by?doc.created_by.charAt(0):''}</span>
                          {doc.created_by}
                        </section>
                      </section>
                      <section className="flex mt-1 text-base">
                        <span className="material-symbols-rounded text-base">
                          share
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="outline-none ">
                            <span className="material-symbols-rounded text-slate-600">
                              more_vert
                            </span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <Link href={`/document/${doc.file_key}`} className='flex p-2 gap-2 items-center text-sm w-full rounded-md cursor-pointer hover:bg-indigo-100'>
                            <span className="material-symbols-rounded text-xl">fullscreen</span>
                            <p className='font-medium '>View</p>
                            </Link>
                            <Dialogconflict name={"Check Conflict"} icon={"quick_reference_all"}/>
                            <Dialogconflict name={"Sign & Execute"} icon={"task"}/>
                            <Dialogconflict name={"Info"} icon={"info"}/>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </section>
                    </section>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FileViewer