"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Questions } from "@/data/Index";
import Image from "next/image";
import sign from '../../public/signature2.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Notick, Tick } from "../Icons";

export default function QuestionsDemo() {
  const [page, setpage] = useState(0);
  const [toggle, settoggle] = useState("terms");
if(!Questions) return <div className="">Loading</div>

  return (
//  navbar

    <div className="min-h-screen">
      <div className=" border-b flex flex-row border-b-black/20">
        <div className="border-r p-3 flex flex-row border-r-black/20">
          <Link href={"/raise"}>
            <p className="cursor-pointer text-black/70">Raise</p>
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href={"/raise/equity"}>
            <p className="text-black/70">Equity</p>
          </Link>
          <span className="mx-2">&gt;</span>
          <p className="text-black/70">Dashboard</p>
        </div>
        <div className="flex flex-row w-full p-3 justify-between gap-6 ">
          <p className="text-black">{Questions[page].page}</p>
          <button disabled={page+1===8}  onClick={() => setpage(page+1)}>
            <p className="text-black/70">
              {Questions[page].nextPage}
              <span className="mx-2">&gt;</span>
            </p>
          </button>
        </div>
      </div>
    {/* header */}
      <div className="flex justify-between mx-10 mt-10">
        
        
        {Questions[page].headerType==='section_button'?
        <div className="flex gap-4 ">
        <button className="rounded-full border border-indigo-500 text-indigo-500 px-3 py-1" >SSA</button>
        <button className="rounded-full border  px-3 py-1" >SSH</button>
        <button className="rounded-full border  px-3 py-1">DL</button>
      </div>:Questions[page].headerType==='toggle'?
      <div className=" rounded-full bg-black/10 h-10 w-fit gap-2 flex p-[0.2rem]">
      <button
        className={`font-semibold  rounded-full px-2 ${
          toggle === "document"
            ? "text-indigo-500 bg-white shadow-lg"
            : "text-black/70"
        }`}
        onClick={() => settoggle("document")}
      >
        Documents
      </button>
      <button
        className={` rounded-full px-2  font-semibold ${
          toggle === "document"
            ? "text-black/70"
            : "text-indigo-500 bg-white shadow-lg"
        }`}
        onClick={() => settoggle("terms")}
      >
        Terms
      </button>
    </div>:
    Questions[page].headerType==='alert'?
    <div className="w-full h-10 bg-yellow-200/50 flex rounded-lg border-2 px-3 py-1 border-yellow-200">
     <span className="material-symbols-rounded">
error
</span>

<p className="mt-1 mx-2 font-semibold text-black/80">

{
// @ts-ignore
Questions[page].alert_message.message}</p>
<button className="mt-1 font-semibold text-indigo-500">{
// @ts-ignore
Questions[page].alert_message.link}</button>
    </div>:
    ''
      }
        {Questions[page].contenType==='accor'?
      <div className="w-fit flex gap-3">
      <button className="border border-black/20 rounded-lg h-9 w-9 flex justify-center items-center">
        <Image
          src={sign}
          alt="profile"
          width={20}
          height={20}
          className="  "
        />
      </button>
      <button className="border border-black/20 rounded-lg h-9 w-9 flex justify-center items-center">
      <span className="material-symbols-rounded">
download
</span>
      </button>

      <button className="border border-black/20 rounded-lg h-9 w-9 flex justify-center items-center">
      <span className="material-symbols-rounded">
share
</span>
      </button>
      <button className="border border-black/20 rounded-lg h-9 w-9">
      <span className="material-symbols-rounded">
more_vert
</span>
      </button>
    </div>:''  
      }
      </div>
      {/* questions or document */}
     {toggle==='document' ?
     <div className="px-10 py-5 flex gap-3">
     {
     // @ts-ignore
     Questions[page].documents.map((e,index)=>
     <div key={index} className="border border-black/20 w-4/12 h-48 flex flex-col justify-around rounded-xl p-5">
     <p className="font-semibold text-black/80 text-xl">{e.title}</p>
     <p>{e.description}</p>
     <div className="flex justify-between">
     <Button className="bg-white border border-black/20 text-indigo-500 hover:bg-indigo-500 hover:text-white">
     {e.button_text}
   </Button>
       <div className="w-fit flex gap-3">
     <button className="border border-black/20 rounded-lg h-7 w-7 flex justify-center items-center">
       <Image
         src={sign}
         alt="profile"
         width={20}
         height={20}
         className="  "
       />
     </button>
     <button className="border border-black/20 rounded-lg h-7 w-7 flex justify-center items-center">
     <span className="material-symbols-rounded">
download
</span>
     </button>

     <button className="border border-black/20 rounded-lg h-7 w-7 flex justify-center items-center">
     <span className="material-symbols-rounded">
share
</span>
     </button>
     <button className="border border-black/20 rounded-lg h-7 w-7">
     <span className="material-symbols-rounded">
more_vert
</span>
     </button>
   </div>
     </div>
   </div>
     )}
   </div>:
   <div className="w-full p-10 ">
        {Questions[page].contenType==='accor'?
      <Accordion
      type="multiple"
      className="border border-black/20 rounded-lg"
    >
      {
      // @ts-ignore
      Questions[page].question.map((index, q) => (
        <AccordionItem
          value={index.number}
          key={index.number}
          className="p-3"
        >
          <AccordionTrigger className="hover:no-underline text-xl flex justify-between w-full text-black/80">
            {index.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {index.ques.map((ques) => (
              <div key={ques} className="flex flex-row">
                <p className="w-5/12 text-base text-black/70 p-3">{ques}</p>
                <input
                  type="text"
                  className="w-6/12 p-3 outline-none"
                  placeholder="sample"
                />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>:
    Questions[page].contenType==='mcq'?
<>
    {
    // @ts-ignore
    Questions[page].questions.map((e,index)=>
    <div key={index} className="w-full border rounded-lg h-48 mb-5 border-black/20 p-4 justify-around flex flex-col ">
    <p className="font-semibold text-black/80 text-xl">{e.title}</p>
   <p>{e.desciption}</p>
    {e.radio?
  <div className="flex gap-3">
  <button>Yes</button>
  <button>No</button>
</div>:
  <input
  type="text"
  className="w-48 p-2 border bg-black/5 rounded-lg outline-none"
  placeholder={e.input_placeholder}
/>
  }
  </div> 
    )}
    </>:
   Questions[page].contenType==='table'?
   <>
   <div className="w-full flex flex-col">
   <div className="w-full flex flex-row bg-indigo-100 rounded-t-xl">
           <div className="w-5/12 flex flex-row">
              <div className="w-10/12 p-2 text-black/50 font-semibold mx-2 ">Shareholder</div>
              <div className="w-2/12  p-2 text-black/50 font-semibold mx-2">Scheme</div>
           </div>
           <div className="w-7/12 flex flex-row ">
           <div className="w-3/12 p-2 text-black/50 font-semibold mx-2 ">Investment</div>
           <div className="w-4/12 p-2 text-black/50 font-semibold mx-2 ">Recieved</div>
           <div className="w-5/12 p-2 text-black/50 font-semibold mx-2 ">Recieved on</div>
           </div>
       </div>
       {
       // @ts-ignore
       Questions[page].Companies.map((e,index)=>
       <div key={index} className="w-full flex flex-row py-3 border-x border-x-black/20 border-b border-b-black/20">
       <div className="w-5/12 flex flex-row">
          <div className="w-10/12 p-2 text-black/80 mx-2 font-semibold flex flex-row">
          {/* <Image
           src={documentcard}
           alt="profile"
           width={24}
           height={24}
           priority
           className="mx-1 rounded-full"
         /> */}
          {e.shareholder}</div>
          <div className="w-2/12  p-2 text-black/50 mx-2">{e.scheme}</div>
       </div>
       <div className="w-7/12 flex flex-row ">
       <div className="w-3/12 p-2 text-black/50 mx-2 ">{e.investment}</div>
       <div className="w-4/12 p-2 text-black/50  mx-2 flex flex-row">
       {e.recieved?
       <Tick/>:
    <Notick/>
       }
       
         
       </div>
       <div className="w-5/12 p-2 text-black/50  mx-2 justify-between flex flex-row">
         <p className='text-indigo-400 text-xs mx-2 mt-2 font-semibold'>{e.recieved_on}</p>
         <div className="align-right">
         <span className="material-symbols-rounded">
calendar_today
</span>
         </div>
        
       </div>
       </div>
   </div>)}
   </div>
   </>:''
      }
        
      </div>
    }
      
      <div className="flex gap-3 px-10 pb-10">
        {page === 0 ? (
          ""
        ) : (
          <Button
            className="bg-indigo-500 text-white hover:bg-indigo-600 "
            onClick={() => setpage(page - 1)}
          >
            Previous
          </Button>
        )}
        <Button className="bg-white border border-black/20 text-indigo-500 hover:bg-indigo-500 hover:text-white">
          Save
        </Button>
        {page === 7 ? (
          ""
        ) : (
        <Button
          className="bg-indigo-500 text-white hover:bg-indigo-600 "
          onClick={() => setpage(page + 1)}
        >
          Next
        </Button>
          )}
      </div>
    </div>
  );
}
