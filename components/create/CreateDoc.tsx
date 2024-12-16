'use client'
import Katora from '@/components/katora/Katora';
import TemplateTab from '@/components/katora/TemplateTab';
import useTemplateStore from '@/store/template-store';
import { useState } from 'react';
export default function CreateDoc() {
    const {selectedTemplate}=useTemplateStore()
  return (
    <div className="flex flex-col p-6 pt-10  mx-auto gap-6 rounded-md bg-card">
    <p className='text-2xl text-main font-semibold'>Choose from Existing Template Library below.</p>
    <TemplateTab/>
    <Katora/>
  </div>
  )
}
