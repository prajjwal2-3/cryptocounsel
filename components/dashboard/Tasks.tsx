import { Tick } from "../Icons";
import { Notick } from "../Icons";
import { Separator } from "../ui/separator";
export default function Tasks() {
  const taskData = [
    {
      title: "Prepare for the meeting!!",
      date: "29 Aug, 2024",
      name: "Aakash",
      done: false,
    },
    {
      title: "Send Documents to the team.",
      date: "29 Aug, 2024",
      name: "Yash",
      done: true,
    },
  ];
  return (
    <div className="border border-[#e5e5e5] p-6 rounded-xl flex-1 flex-grow flex flex-col gap-4">
      <p className="font-semibold text-[18px] text-slate-800">Task</p>
      <section className="flex flex-row gap-2 justify-between">
        <section>
          <button className="bg-[#ECECFF] text-indigo-400 font-semibold text-base px-4 py-1 rounded-full">
            To-do
          </button>
          <button className=" text-slate-600 font-semibold text-base px-4 py-1 rounded-full">
            Completed
          </button>
        </section>
        <button className=" text-slate-600 font-semibold text-sm border border-black/20 items-center flex px-2  rounded-full">
          Most Recent
          <span className="material-symbols-rounded !m-0">keyboard_arrow_down</span>
        </button>
      </section>
      <Separator />

      {
        taskData.map((e,index)=>
            <section key={index} className="flex gap-2">
                {e.done? <Tick />:<Notick/>}
       
        <section className="">
          <p className="font-medium text-base text-slate-800">
            {e.title}
          </p>
          <p className="text-sm flex font-medium text-slate-600 flex-row items-center gap-2">
            <span className="material-symbols-rounded text-xl text-slate-600">
              event_available
            </span>
            {e.date}
            <span className={`w-5 h-5 rounded-full ${index===0?'bg-indigo-400':'bg-[#02877F]'} flex items-center justify-center ml-4 text-white`}>
              {e.name.charAt(0)}
            </span>
            {e.name}
          </p>
        </section>
      </section>
        )
      }
    </div>
  );
}
