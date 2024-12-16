'use client'
import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { red } from '@mui/material/colors';
const Gagz = () => {
  return (
  
    <div className='flex justify-center  items-center h-[200px] w-[200px]'>
    <div   className='absolute'>
    <Gauge width={200} height={200} value={90} cornerRadius={80} innerRadius='85%' outerRadius='100%'
   
    sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize:0
        },
        [`& .${gaugeClasses.valueArc}`]: {
            fill: 'rgb(83,96,172)'
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          
        },
       
      })}
    />
    </div>
    <div   className='absolute'>
    <Gauge width={150} height={150} value={70} cornerRadius={80} innerRadius='80%' outerRadius='100%'
   
    sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
            fontSize:0
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#1ABAFF',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          
        },
      })}
    />
    </div>
       <div className="">
       <Gauge width={100} height={100} value={30} cornerRadius={80} innerRadius='75%' outerRadius='100%'
       sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize:0
        },
        [`& .${gaugeClasses.valueArc}`]: {
            fill: '#FFD37D'
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          
        },
       
      })}
       />
       </div>
  </div>
  
    
  )
}

export default Gagz