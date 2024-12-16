import React from "react";
import { equity } from "@/data/Index";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-48 border border-black/20  flex flex-col gap-3 rounded-xl p-6 m-3">
        <div className="text-xl font-bold flex justify-between">
          <p>Overview</p>
          <div className="flex gap-1">
            <button className="w-[32px] h-[32px] border rounded-lg flex justify-center items-center">
              <span className="material-symbols-rounded">add</span>
            </button>
            <button className="w-[32px] h-[32px] border rounded-lg flex justify-center items-center">
              <span className="material-symbols-rounded">more_vert</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="border rounded-lg h-24 text-left p-4 flex flex-col justify-between w-52">
            <p className="font-semibold text-black/60">Raised</p>
            <p className="text-xl font-semibold">$300K</p>
          </button>
          <button className="border rounded-lg h-24 text-left p-4 flex flex-col justify-between w-52">
            <p className="font-semibold text-black/60">Valuation</p>
            <p className="text-xl font-semibold">$1.8 M</p>
          </button>
          <button className="border rounded-lg h-24 text-left p-4 flex flex-col justify-between w-52">
            <p className="font-semibold text-black/60">Option pool</p>
            <p className="text-xl font-semibold">10%</p>
          </button>
          <button className="border rounded-lg h-24 text-left p-4 flex flex-col justify-between w-52">
            <p className="font-semibold text-black/60">Price per share</p>
            <p className="text-xl font-semibold">$0.63</p>
          </button>
          <button className="border rounded-lg h-24 text-left p-4 flex flex-col justify-between w-52">
            <p className="font-semibold text-black/60">Target closing</p>
            <p className="text-xl font-semibold">31 Aug 2024</p>
          </button>
        </div>
      </div>
      <div className="w-full h-48 border border-black/20 rounded-xl p-3 m-3">
        <div className="text-xl font-bold">Investors</div>
        <div className="flex justify-between"></div>
      </div>
      {equity.map((item, index) => (
        <div
          key={index}
          className="w-full  border border-black/20 rounded-xl p-3 m-3 flex "
        >
          <div
            className={`w-6 h-6 rounded-full border-2 text-center  ${
              item.green
                ? "border-green-500 text-green-500"
                : "border-black/20 text-black/50"
            }`}
          >
            <p className="-mt-0.5">{item.number}</p>
          </div>
          <div className="flex flex-col gap-2 items-start w-11/12 mx-7">
            <p className="font-semibold text-xl">{item.title}</p>
            <p className="text-black/50 text-base">{item.description}</p>
            {item.button ? (
              <Link href={item.to}>
                <button className="border px-3 py-1 rounded-lg border-black/20 text-indigo-500 hover:bg-indigo-500 hover:text-white">
                  {item.button_text}
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-1 ">
            {item.share ? (
              <button className="border border-black/20 rounded-lg h-7">
                <span className="material-symbols-rounded">share</span>
              </button>
            ) : (
              ""
            )}
            <button className="border border-black/20 rounded-lg h-7">
              <span className="material-symbols-rounded">edit</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
