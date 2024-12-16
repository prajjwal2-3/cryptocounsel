import React from "react";
import { useState, useEffect, useRef } from "react";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
interface SummaryData {
  basicSummary: string;
  keyCommercialTerms:[{
    term:string,
    description:string
  }];
  mutualRights: [{
    right:string,
    description:string
  }];
  independentRightsAndObligations:[{
    rightObligation:string,
    description:string
  }];
}

interface SummaryCardProps {
  summary: SummaryData;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speakText(text: string) {
    if ("speechSynthesis" in window) {
      if (!utteranceRef.current) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-IN";
        utterance.rate = 1.0;
        utterance.pitch = 0.5;

        utterance.onend = () => {
          setIsSpeaking(false);
          setIsPaused(false);
        };

        utteranceRef.current = utterance;
      }

      if (isPaused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.speak(utteranceRef.current);
      }

      setIsSpeaking(true);
      setIsPaused(false);
    } else {
      console.log("Speech synthesis is not supported in this browser.");
    }
  }

  function pauseSpeech() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }

  function stopSpeech() {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceRef.current = null;
  }

  const textToSpeak = `The basic summary of this document is as follows ${JSON.stringify(
    summary
  )} thank you.`;

  return (
    <div className="py-4 flex flex-col gap-3 ">
      <section className="flex flex-col gap-2">
        <p className="text-2xl text-slate-800 font-semibold">
          Basic summary of this document
        </p>
        <p>{summary.basicSummary}</p>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-2xl text-slate-800 font-semibold">
          Key Commercial Terms
        </p>
        <ul className="list-disc pl-5">
          {summary.keyCommercialTerms.map((e, index) => (
            <li key={index}>
              {e.term}{" "}
              
              <Dialog>
      <DialogTrigger asChild>
      <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                learn more.
              </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Description</DialogTitle>
       
        </DialogHeader>
        <Separator/>
        <div className="grid gap-4 py-4">
          {e.description}
          
        </div>
      
      </DialogContent>
    </Dialog>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-2xl text-slate-800 font-semibold">Mutual Rights</p>
        <ul className="list-disc pl-5">
          {summary.mutualRights.map((e, index) => (
            <li key={index}>
              {e.right}{" "}
              <Dialog>
      <DialogTrigger asChild>
      <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                learn more.
              </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Description</DialogTitle>
       
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {e.description}
          
        </div>
      
      </DialogContent>
    </Dialog>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-2xl text-slate-800 font-semibold">
          Independent Rights and Obligations
        </p>
        <ul className="list-disc pl-5">
          {summary.independentRightsAndObligations.map((e, index) => (
            <li key={index}>
              {e.rightObligation}{" "}
              <Dialog>
      <DialogTrigger asChild>
      <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                learn more.
              </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Description</DialogTitle>
       
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {e.description}
          
        </div>
      
      </DialogContent>
    </Dialog>
            </li>
          ))}
        </ul>
      </section>
      <div className=" flex justify-end gap-3 text-slate-800">
        <button
          onClick={() => speakText(textToSpeak)}
          disabled={isSpeaking && !isPaused}
        >
          {isPaused ? (
            <span className="material-symbols-rounded">resume</span>
          ) : (
            <span className="material-symbols-rounded">headphones</span>
          )}
        </button>
        <button onClick={pauseSpeech} disabled={!isSpeaking || isPaused}>
          <span className="material-symbols-rounded">pause</span>
        </button>
        <button onClick={stopSpeech} disabled={!isSpeaking && !isPaused}>
          <span className="material-symbols-rounded">stop_circle</span>
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
