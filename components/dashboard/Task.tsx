'use client'
import { Card } from "../ui/card";
import AddTaskDialog from "./CreateTask";
import { useTaskStore } from "@/store/taskstore";
import { ScrollArea } from "../ui/scroll-area";
import TaskDialog from "./TaskDialog";
import { Button } from "../ui/button";
import { Info } from "lucide-react";
export default function Task() {
const {tasks}=useTaskStore()

    function getCurrentDateFormatted() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
        const month = months[today.getMonth()];
        const dayOfMonth = today.getDate();
      
        
        const getOrdinalSuffix = (day:any) => {
          if (day > 3 && day < 21) return 'th'; 
          switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
          }
        };
      
        return `${dayOfWeek}, ${month} ${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`;
      }
      
      const priorityColors = {
        LOW: '-blue-100 text-[#60B068]',
        MEDIUM: '-yellow-100 text-[#FF9B7F]',
        HIGH: '-red-100 text-[#E66C70]'
      };
    const barsData = [
        {
          color: "#00BFFF",
          width: "100px",
          title: "Pending Task",
          quantity: 23,
        },
        {
          color: "#FFA07A",
          width: "75px",
          title: "Upcoming deadline",
          quantity: 12,
        },
       
      ];
    const formatDate = (date: Date | string | null): string => {
      if (!date) return 'No deadline';
      if (typeof date === 'string') {
        return new Date(date).toDateString();
      }
      return date.toDateString();
    };
  return (
    <div className="w-[30%] flex flex-col">
      <Card className=" p-4  divide-y-2 flex flex-col divide-foreground divide-dashed bg-stroke  !rounded-b-none rounded-t-[8px]">
        <section className="flex justify-between ">
          <span className="font-semibold text-base text-foreground flex items-center gap-1">
            Tasks{" "}
         
          </span>
          
          <AddTaskDialog/>
        </section>
        <section className="flex py-4 mt-4 flex-col gap-2 ">
          <section className="flex justify-between ">
            <span className="font-semibold text-sm text-[#777BEA]">{ getCurrentDateFormatted()}</span>
            {/* <span className="font-semibold text-sm text-main">120</span> */}
          </section>
          
        </section>
        <section className="py-4 flex flex-col gap-2">
          {barsData.map((e, index) => (
            <span
              key={index}
              className="text-foreground/70 w-full flex justify-between"
            >
              <p className="flex gap-1 items-center">
                <span
                  style={{ backgroundColor: e.color }}
                  className="w-2 h-2 mr-1 rounded-full"
                ></span>
                {e.title}
              </p>
              <p className="text-foreground font-medium">{e.quantity}</p>
            </span>
          ))}
        </section>
      </Card>
      <Card className="!border-t border-white !border-r-0 !border-l-0 !border-b-0 bg-stroke !rounded-t-none border-2  p-4 flex-grow rounded-b-[8px]">
        <p className="font-semibold text-sm text-foreground">To do List</p>
        <ScrollArea className="h-72">
        {tasks.slice().reverse().map((task) => (
        <div key={task.id} className="border-y border-gray-200 mr-2 py-1 last:border-b-0">
          <div className="flex justify-between items-center ">
            <span className="font-medium text-sm text-foreground/90">{task.title}</span>
            <TaskDialog taskId={task.id}>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1"
              >
                <Info size={16} className="text-foreground/70"/>
              </Button>
            </TaskDialog>
          </div>
          <div className="flex justify-between items-center ">
          <span className="flex items-center text-xs text-foreground/70">
              <span className="text-foreground/70">Due: </span> {formatDate(task.deadline)}
            </span>
            <span className="text-sm px-2 text-foreground/70">
            Priority <span className={` rounded-full ${priorityColors[task.priority]}`}>
             {task.priority}
            </span>
            </span>
            
          </div>
        </div>
      ))}
      </ScrollArea>
      </Card>
    </div>
  )
}
