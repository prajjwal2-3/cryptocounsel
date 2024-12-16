import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ScrollArea } from "../ui/scroll-area";
export default function Guidance() {
  
  return (
    <div className="border border-[#e5e5e5] p-6 rounded-xl w-7/12 flex flex-col gap-4">
    <p className="font-semibold text-[18px] text-slate-800">Get Guidance</p>
   
   <ScrollArea className="h-48">

   <Accordion type="single" collapsible className="w-full pr-2 text-slate-800">
      <AccordionItem value="item-1">
        <AccordionTrigger className="no-underline">
      Create Drafts
            </AccordionTrigger>
        <AccordionContent>
         What are you planning to do?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Managing My Company</AccordionTrigger>
        <AccordionContent>
          What can we help you with?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Check & Due Diligence</AccordionTrigger>
        <AccordionContent>
          What do you wish to check or provide?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="no-underline">
      Create Drafts
            </AccordionTrigger>
        <AccordionContent>
         What are you planning to do?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Managing My Company</AccordionTrigger>
        <AccordionContent>
          What can we help you with?
        </AccordionContent>
      </AccordionItem>
    </Accordion>

   </ScrollArea>
    
  </div>
  )
}
