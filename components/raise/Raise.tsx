import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Raise() {
  const raiseTabs = [
    {
      name: "Equity",
      description: "Money invested in a company by purchasing shares",
      icon: "pie_chart",
      color: "#FAF6FF",
    },
    {
      name: "Debts",
      description:
        "Loans either secured or unsecured for business or capital needs",
      icon: "account_balance_wallet",
      color: "#E6F2FF",
    },
    {
      name: "Hybrid & Notes",
      description:
        "Mixes equity & debt, turns to equity on new funding or deadline",
      icon: "text_snippet",
      color: "#FFF4E3",
    },
  ];

  return (
    <div className="py-12 px-6 w-full flex flex-col min-h-screen gap-6">
      <p className="font-semibold text-3xl text-slate-800">Raise</p>
      <section className="flex gap-4">
        {raiseTabs.map((tab, index) => (
          <Link
          href='/raise/equity'
            key={index}
            className="w-4/12 cursor-pointer border group rounded-2xl flex flex-col justify-between overflow-hidden  mb-6"
          >
            <section className="m-6 gap-4 flex flex-grow">
              <section className="w-3/12   ">
                <section className="h-16 mt-5 rounded-2xl border flex justify-center items-center w-full">
                  <span
                    className={`material-symbols-rounded text-3xl ${
                      index === 0
                        ? "text-purple-600"
                        : index === 1
                        ? "text-blue-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {tab.icon}
                  </span>
                </section>
              </section>
              <div className=" flex flex-col justify-center">
                <p className="font-medium text-lg">{tab.name}</p>
                <p className="text-sm text-gray-600">{tab.description}</p>
              </div>
            </section>
            <section
              className={`h-9 ${
                index === 0
                  ? "bg-purple-200 group-hover:bg-purple-400"
                  : index === 1
                  ? "bg-blue-100 group-hover:bg-blue-400"
                  : "bg-yellow-100 group-hover:bg-yellow-400"
              }`}
            ></section>
          </Link>
        ))}
      </section>
      <div className="border border-black/20  w-full rounded-lg p-4 ">
      <p className="text-xl font-semibold text-gray-800">Let&apos;s fill out the funding details</p>
      <Separator className="my-1"/>
      <form className="space-y-4 w-full  flex flex-col">
          <section className="flex flex-row justify-between gap-6 w-full">
          <div className="space-y-2 w-6/12">
            <Label htmlFor="roundName" className="text-sm font-medium text-gray-900">Round Name</Label>
            <p className="text-xs  text-gray-500">Explain the round</p>
            <Input id="roundName" placeholder="Example: Pre-seed" className="w-full border-gray-300 bg-gray-100 rounded-md" />
          </div>
          
          <div className="space-y-2 w-6/12">
            <Label htmlFor="targetClosingDate" className="text-sm font-medium text-gray-700">Target Closing Date</Label>
            
            <p className="text-xs text-gray-500">When do you expect this round to be completed?</p>
            <Input 
              id="targetClosingDate" 
              
              placeholder="Usually 3-6 months"
              className="w-full border-gray-300 bg-gray-100 rounded-md" 
            />
           
            
          </div>
          </section>
          
         <section className="flex flex-row justify-between gap-6 w-full">
         <div className="space-y-2 w-6/12">
            <Label htmlFor="targetRaise" className="text-sm font-medium text-gray-700">Target Raise</Label>
            <p className="text-xs text-gray-500">Expected lumpsum amount to raise</p>
            <div className="flex items-center space-x-2">
            <Select>
      <SelectTrigger className="w-[80px] !p-1.5 bg-gray-100">
        <SelectValue placeholder="$ USD" className="!p-0 !m-0"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="apple">INR</SelectItem>
          <SelectItem value="banana">USD</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
              <Input 
                type="text" 
                placeholder="Expected Amount to raise" 
                className="flex-1 border-gray-300 bg-gray-100 rounded-md" 
              />
            </div>
           
          </div>
         
          
          <div className="space-y-2 w-6/12">
            <Label htmlFor="companyValuation" className="text-sm font-medium text-gray-700">Company Valuation</Label>
            <p className="text-xs text-gray-500">Try to find out comparable businesses fundraise data to understand expected valuation. 

<span className="text-indigo-400"> Click here</span>
</p>
            <Input 
              id="companyValuation" 
              type="text" 
              placeholder="Type here..." 
              className="w-full border-gray-300 bg-gray-100 rounded-md" 
            />
           
          </div>
          </section>
          <Button type="submit" className="w-fit  bg-indigo-600 hover:bg-indigo-700 text-white">
            Save
          </Button>
        </form>
        </div>
    </div>
  );
}
