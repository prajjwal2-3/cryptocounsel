"use client";
import Link from "next/link";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Search,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Ai } from "../Icons";
import { Input } from "../ui/input";

import axios from "axios";
import { Button } from "../ui/button";
export default function CommandBar({isSide,isHead}:{isSide:boolean,isHead:boolean}) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [ans, setans] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);
 React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey) && isHead ) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
 
  let data = JSON.stringify({
    text: `"${input}"`,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "api/ai/navigation",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  function aisearch() {
    setIsLoading(true);
    axios
      .request(config)
      .then((response) => {
        setIsLoading(false);
        setans(response.data.summary.text);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert(error);
      });
  }
  return (
    <>
      {
        isSide?
        <section className="flex justify-between  ">
        <span>Enterprise</span>
        <span>Pricing</span>
        <span>Docs</span>
        <span>FAQ</span>
      </section>:
        
        <p
        className="text-sm border-2 items-center border-stroke px-[10px] py-[14px] drop-shadow-[2px,1px,5px] rounded-[8px] flex justify-between h-12 text-muted-foreground cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="flex items-center"> Just ask for the task! </span>

        <Ai />
      </p>}
      <CommandDialog open={open} onOpenChange={setOpen}>
        {/* <CommandInput placeholder="Type a command or search..." /> */}
        <CommandList className="bg-background">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Ask Conqr AI" className="">
            <CommandItem className="flex gap-2 hover:!bg-stroke">
              <Input
                placeholder="Ask questions from our AI assistant"
                className="text-white"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              ></Input>
              <Button
                className="bg-indigo-500 hover:bg-indigo-600"
                onClick={aisearch}
              >
                {isloading ? "Wait.." : "Ask"}
              </Button>
            </CommandItem>
            {ans !== "" && (
              <CommandItem className="flex gap-2 hover:!bg-stroke hover:!text-white">
                <p className="font-medium">Here are your search results</p>
                <Link href={ans}>
                  <button className="bg-indigo-600 py-1 px-2 rounded text-white font-medium flex items-center">
                    <span className="material-symbols-rounded text-base">
                      north_east
                    </span>
                    {ans.slice(1)}
                  </button>
                </Link>
              </CommandItem>
            )}
          </CommandGroup>
          <CommandGroup heading="tasks">
            <CommandItem className=" hover:!bg-stroke hover:!text-white">
              <span className="w-5 h-5 rounded-full bg-[#02877F] flex items-center justify-center mr-3 text-white">
                A
              </span>
              <span>Meeting with Investors!!! </span>
              <span className="bg-orange-300 w-fit gap-2 px-2 ml-4 rounded-md h-5 flex items-center justify-around">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
                <p>Now</p>
              </span>
            </CommandItem>
            <CommandItem className="hover:!bg-stroke hover:!text-white">
              <span className="w-5 h-5 rounded-full bg-indigo-400 flex items-center justify-center mr-3 text-white">
                Y
              </span>
              <span>Send draft documents to the dev team </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Suggestions">
            <CommandItem className="hover:!bg-stroke hover:!text-white">
              <span className="material-symbols-rounded mr-2">
                contract_edit
              </span>
              <span>Create new agreement</span>
            </CommandItem>
            <Link href="/conflictcheck">
              <CommandItem className="hover:!bg-stroke hover:!text-white">
                <span className="material-symbols-rounded mr-2">rule</span>
                <span>Run conflict check</span>
              </CommandItem>
            </Link>
            <Link href="/review">
              <CommandItem className="hover:!bg-stroke hover:!text-white">
                <span className="material-symbols-rounded mr-2">
                  description
                </span>
                <span>Create summary of a document</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Results">
            <CommandItem className="hover:!bg-stroke hover:!text-white">
              <span className="material-symbols-rounded mr-2">folder</span>
              <span>Repository</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:!bg-stroke hover:!text-white">
              <span className="material-symbols-rounded mr-2">
                account_circle
              </span>
              <span>Profile</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:!bg-stroke hover:!text-white">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
