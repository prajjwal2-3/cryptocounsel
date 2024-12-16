'use client'
import React from 'react'
import Image from 'next/image'
import useTemplateStore from '@/store/template-store';
import { Button } from '../ui/button';
export default function TemplateTab() {
  const agreementTypes = [
    {
      name: "Non-Disclosure Agreement",
      imageLink: "https://res.cloudinary.com/dzkldv06d/image/upload/v1724245533/download_4_kzalhn.jpg"
    },
    {
      name: "Collaboration Agreement",
      imageLink: "https://res.cloudinary.com/dzkldv06d/image/upload/v1724245533/download_1_pdgrp4.jpg"
    },
    {
      name: "Consultancy Agreement",
      imageLink: "https://res.cloudinary.com/dzkldv06d/image/upload/v1724245533/download_2_fcqggs.jpg"
    },
    {
      name: "Employment Contract",
      imageLink: "https://res.cloudinary.com/dzkldv06d/image/upload/v1724245533/download_fsgrq7.jpg"
    }
  ];
  const {chooseTemplate}=useTemplateStore()
  return (
    <div className='grid grid-cols-5 gap-2'>
      {
        agreementTypes.map((e,index)=>
        <div key={index} className="overflow-hidden group relative rounded-lg">
          <span className='absolute my-3 mx-1 z-10 bg-white/60 px-2 text-sm rounded-full'>{e.name}</span>
          <section className='absolute bottom-6 z-10 group-hover:flex gap-5 hidden  justify-between w-full pr-12 left-6'>
         <Button className='w-6/12' onClick={()=>{
          chooseTemplate(index)
         }}>Use</Button>
         <Button variant='secondary' className='w-6/12'>Preview</Button>
          </section>
          
          <Image  src={e.imageLink} alt='' width={250} height={100} className='rounded-lg group-hover:scale-110 duration-200'/>
        </div>
        )
      }
      <div className="bg-gray-200 rounded-lg flex justify-center items-center shadow-inner">
        <Button variant='secondary' onClick={()=>{
          chooseTemplate(4)
        }}>Create new +</Button>
      </div>
    </div>
  )
}
