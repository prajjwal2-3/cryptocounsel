'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import Divider from '@mui/material/Divider';

import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
export default function Dialogconflict({name,icon}:{
    name:string,
    icon:string

}) {
   
  return (
    <Dialog >
  <DialogTrigger className={`flex p-2 gap-2 items-center text-sm w-full rounded-md hover:bg-indigo-100`}>
      
  <span className="material-symbols-rounded text-xl">{icon}</span>
  <p className='font-medium '>{name}</p>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px] h-auto">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
      
          <Divider/>
        </DialogHeader>
        <div className="grid gap-4 md:py-4 py-1">
          <div className="grid grid-rows items-center md:gap-4 gap-1">
            <Label htmlFor="name" >
            Select document
            
            </Label>
            
            <input id="name"   className="col-span-3 border p-2 rounded-lg outline-none" placeholder={'Search Documents'} />
          </div>
          <div className="grid grid-rows items-center md:gap-4 gap-1">
            <Label htmlFor="username" >
              Upload Document
              
            </Label>
            <div className="md:p-4 w-full h-20 flex justify-evenly items-center outline-dashed rounded-lg outline-black/20">
          
            <p className='text-black/60 w-8/12 text-sm md:text-base'>
                Browse and choose the files you want to upload from your computer
            </p>
           
            </div>
          </div>
          <div className="flex items-center md:gap-4 gap-1 p-1 md:p-4 border rounded-lg">
           
             <section className='flex flex-col'>
                <p className='font-semibold text-slate-800'>
                    Consultancy Agreement Abey x Surego
                </p>
                <p className='text-slate-600 text-sm'>
                    Created 23/06/2023
                </p>
             </section>
            
          </div>
          <div className="flex items-center md:gap-4 md:p-4 p-1 gap-1 border rounded-lg">
           
             <section className='flex flex-col'>
                <p className='font-semibold text-slate-800'>
                    Consultancy Agreement Abey x Surego
                </p>
                <p className='text-slate-600 text-sm'>
                    Created 23/06/2023
                </p>
             </section>
            
          </div>
        </div>
        <Divider/>
        <div className='flex justify-between items-center w-full'>
        <DialogClose asChild>
            <Button type="button"  variant='outline' className='border'  >
              Close
            </Button>
          </DialogClose>
        <DialogClose asChild>
            <Button type="button"   className='bg-indigo-400 hover:bg-indigo-500'  >
              Next
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
</Dialog>
  )
}
