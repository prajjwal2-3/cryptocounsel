"use client";
import React, { useState } from "react";
import Image from "next/image";
import search from "../../public/search.svg";

import axios from "axios";
import { useRef } from "react";

import Link from "next/link";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
const Searchbar = () => {
  const placeholders = [
    "how to make a document",
    "How to make a term sheet",
    "What is the status of documents that are unsigned",
    "How to do a compliance check",
    "I want to raise some money",
    "I want to go to dashboard",
    "I want to raise another round of funding",
    "I want to make a term sheet",
  ];
  const ai = useRef<HTMLInputElement>(null);
  const [query, setquery] = useState("");
  const [number, setnumber] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  let data = JSON.stringify({
    text: `"${query}"`,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/ai/navigation",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  function aisearch() {
    setnumber(6);
    setSuggestions([]);
    axios
      .request(config)
      .then((response) => {
        setnumber(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        setnumber(5);
      });
  }

  return (
    <div className="my-5">
      <div className="flex justify-between gap-2">
        <div className="border border-purple-400 sm:w-10/12 w-8/12 h-10 sm:h-12 rounded-lg p-1 flex flex-row justify-between">
          <div className="sm:mx-1 my-auto sm:w-8 w-6 ">
            <Image
              src={search}
              alt="profile"
              width={35}
              height={35}
              priority
              className=""
            />
          </div>
          <div className="w-full">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => {
                setquery(e.target.value);
                if (e.target.value.length > 0) {
                  const filteredSuggestions = placeholders.filter(
                    (suggestion) =>
                      suggestion
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                  );
                  // @ts-ignore
                  setSuggestions(filteredSuggestions.length > 0
                      ? filteredSuggestions
                      : ["No matches found"]
                  );
                } else {
                  setSuggestions([]);
                }
              }}
              onSubmit={aisearch}
            />
          </div>
        </div>

       
       
        <div className="sm:w-2/12 w-4/12 ">
          <button
            className={`bg-indigo-500 h-10 sm:h-12 sm:ml-4 hover:bg-indigo-600  rounded-lg px-1 py-2 w-full font-semibold text-white text-center `}
            onClick={aisearch}
          >
            <p className="sm:text-base text-xs">Seach Conqr AI</p>
          </button>
        </div>
      </div>
      
      <div className="mt-2 ">
        {number === 5 ? (
          <button className="pointer-events-none">
            <div className=" mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-[#767796] flex flex-row">
              Type your query above
            </div>
          </button>
        ) : number === 0 ? (
          <button className="pointer-events-none">
            <div className=" mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-[#767796] flex flex-row">
              No result found
            </div>
          </button>
        ) : number ===1? (
          <Link href={"create"} className="flex gap-2">
            <div className="sm:mx-1 sm:px-2 sm:py-1">
              <p className="font-semibold">
                Here are your search results{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </p>
            </div>
            <button>
              <div className="bg-[#835FDD]  sm:mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-white flex flex-row">
                &quot;Create&quot;{" "}
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </button>
          </Link>
        ) : number ===2 ? (
          <Link href={"documents"} className="flex gap-2">
            <div className="sm:mx-1 sm:px-2 sm:py-1">
              <p className="font-semibold">
                Here are your search results{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </p>
            </div>
            <button>
              <div className="bg-[#835FDD]   sm:mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-white flex flex-row">
                &quot;Check your documents&quot;{" "}
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </button>
          </Link>
        ) : number ===3 ? (
          <Link href={"dashboard"} className="flex gap-2">
            <div className="sm:mx-1 sm:px-2 sm:py-1">
              <p className="font-semibold">
                Here are your search results{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </p>
            </div>
            <button>
              <div className="bg-[#835FDD]   sm:mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-white flex flex-row">
                &quot;Go to Dashboard&quot;{" "}
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </button>
          </Link>
        ) : number === 4 ? (
          <Link href={"raise"} className="flex gap-2">
            <div className="sm:mx-1 sm:px-2 sm:py-1">
              <p className="font-semibold">
                Here are your search results{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </p>
            </div>
            <button>
              <div className="bg-[#835FDD]   sm:mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-white flex flex-row">
                &quot;Raise Money&quot;{" "}
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </button>
          </Link>
        ) : number === 6 ? (
          <button>
            <div className="   mx-1 px-2 py-1 w-auto rounded-lg justify-center  text-[#767796] flex flex-row">
              Searching your query
              <div className="flex space-x-2 m-1 p-1 mt-2 justify-center items-center  dark:invert">
                <div className="h-2 w-1 bg-black/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-2 w-1 bg-black/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-1 bg-black/50 rounded-full animate-bounce"></div>
              </div>
            </div>
          </button>
        ) : (
          ""
        )}
       
      </div>
    </div>
  );
};

export default Searchbar;
