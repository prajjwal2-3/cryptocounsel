'use client'
import React from 'react';
import { Card } from "../ui/card";
import CircularLabels from './Pie';

export default function Compliance() {
  return (
    <div className="w-[40%] gap-5 flex  flex-col ">
      <Card className="border border-stroke p-6 divide-y-2 divide-dashed gap-3 bg-stroke flex flex-col">
        <span className="font-semibold text-base text-foreground flex items-center gap-1">
          Compliance{" "}
          <span className="material-symbols-rounded text-base">
            north_east
          </span>
        </span>
        <CircularLabels />
      </Card>
      <Card className="border-2 border-dashed bg-transparent gap-4 flex flex-col items-center justify-center flex-grow">
       <section className='text-center'>
       <p className='font-medium text-sm text-foreground'>Add Widget</p>
       <p className='font-semibold text-xs text-foreground/70'>Customize your dashboard</p>
       </section>
       <div className="w-fit border-2 border-stroke flex justify-center cursor-pointer items-center rounded-[8px] p-1">
            <span className="material-symbols-rounded text-foreground/70">add</span>
          </div>
      </Card>
    </div>
  )
}
