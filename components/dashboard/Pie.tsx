'use client'
import React from 'react';
import { Card, CardContent } from "../ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
interface DataItem {
    name: string;
    value: number;
    fill: string;
  }
  
  const data: DataItem[] = [
    { name: 'Legal and Regulatory', value: 24, fill: '#8884d8' },
    { name: 'Corporate & Business Governance', value: 24, fill: '#b8b5e8' },
    { name: 'Financial', value: 40, fill: '#e8e7f2' },
  ];
  
  const RADIAN = Math.PI / 180;

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.8; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    const rectWidth = 35; 
    const rectHeight = 25; 
  
    return (
      <g>
     
      <filter id="shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
  
      <rect 
        x={x - rectWidth / 2} 
        y={y - rectHeight / 2} 
        width={rectWidth} 
        height={rectHeight} 
        fill="#442360" 
        opacity={60}
        rx={9}
        filter="url(#shadow)"
       
      
      />
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central" 
        className='text-sm'
      >
        {value}
      </text>
    </g>
    );
  };
const CircularLabels= () => {
 

  return (
    <div className='pt-4'>
        <CardContent className="flex h-48 justify-between gap-5">
      <ChartContainer
          config={chartConfig}
          className=" aspect-square max-h-[250px] -ml-6 "
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
             data={data}
             cx="50%"
             cy="50%"
             innerRadius={60}
             outerRadius={80}
             paddingAngle={0}
             dataKey="value"
             label={renderCustomizedLabel}
             labelLine={false}
            />
          </PieChart>
        </ChartContainer>
    
    <div className="grid grid-rows-3 my-auto mx-auto  space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <div 
            className="w-2 h-2 rounded-full mr-2" 
            style={{ backgroundColor: item.fill }}
          ></div>
          <span className="text-sm text-foreground/70">{item.name}</span>
        </div>
      ))}
    </div>
  </CardContent>
    </div>
  );
};

export default CircularLabels;
