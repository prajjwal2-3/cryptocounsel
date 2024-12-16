"use client";
import { Separator } from "../ui/separator";
import ComplianceDashboard from "./ComplianceDashboard";
import { ChevronDown, ChevronUp, Check, Clock, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Compliance as timelineData } from "@/data/compliance";
import { progress } from "framer-motion";
interface Compliance {
  id: number;
  title: string;
  date: string;
  description: string;
  deadline: string;
  section?: string;
  form?: string;
  progress: "done" | "inprogress" | "remaining" | "none";
}

export default function Compliance() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getStatusColor = (status: Compliance["progress"]) => {
    switch (status) {
      case "done":
        return "bg-[#68c052]";
      case "inprogress":
        return "bg-yellow-500";
      case "remaining":
        return "bg-red-500";
      case "none":
        return "bg-gray-300";
    }
  };
  return (
    <div className="py-12 px-6 flex gap-6 flex-col">
      <ComplianceDashboard
        complianceHealth={85}
        pendingCompliance={129}
        completedCompliance={23}
        incorporationDate="1 Sep 2023"
      />
      <Separator />
      <div className="w-full  mr-auto p-4">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className=" flex gap-4"
          >
            <div className="w-24 mr-4  pb-3 text-left text-sm text-gray-500">
              {item.date}
            </div>
            <div className="mr-4 flex flex-col items-center">
            {index < timelineData.length - 1 && (
                <div
                  className={`w-0.5 py-3 h-4 ${getStatusColor(
                    item.progress
                  )}`}
                ></div>
              )}
              <div
                className={`w-7 h-7 p-[2px] border absolute bg-white  place-content-center rounded-full `}
              >
                <div
                  className={`w-full h-full m-auto  rounded-full flex items-center justify-center ${getStatusColor(
                    item.progress
                  )}`}
                >
                  {item.progress === "done" ? (
                    <Check className="text-white w-4 h-4" />
                  ) : item.progress === "inprogress" ? (
                    <Clock className="text-white w-4 h-4" />
                  ) : item.progress === "remaining" ? (
                    <Ban className="text-white w-4 h-4" />
                  ) : null}
                </div>
              </div>
              {index < timelineData.length - 1 && (
                <div
                  className={`w-0.5 py-3 h-full ${getStatusColor(
                    item.progress
                  )}`}
                ></div>
              )}
            </div>

            <div className="flex-grow border-b px-3 pb-5 pt-2">
              <div className="flex flex-row items-center  justify-between">
                <h3 className="text-main font-medium text-base">{item.title}</h3>
                <span>
                  {expandedItems.includes(item.id) ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </span>
              </div>
              <div
                className={`mt-2 overflow-hidden flex flex-col gap-2 transition-all duration-300 ease-in-out ${
                  expandedItems.includes(item.id) ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-textlight font-medium text-sm">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500 items-center flex flex-row gap-1">
                  {" "}
                  <span className="material-symbols-rounded text-base">
                    calendar_clock
                  </span>{" "}
                  Deadline: {item.deadline}
                </p>
                {item.section && (
                  <p className="text-sm text-gray-500 items-center flex flex-row gap-1">
                    {" "}
                    <span className="material-symbols-rounded text-base">
                      gavel
                    </span>{" "}
                    Section No.: {item.section}
                  </p>
                )}
                {item.form && (
                  <span className="border border-stroke w-fit p-1.5 gap-1 rounded-md font-medium text-sm text-indigo-400 flex items-center">
                    <span className="material-symbols-rounded text-sm">
                      description
                    </span>
                    <p>{item.form}</p>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
