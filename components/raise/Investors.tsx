import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil, MoreVertical } from "lucide-react";
import google from "../../public/google.svg";
import azure from "../../public/azure.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import microsoft from "../../public/microsoft.svg";
import Image from "next/image";
import AddNewShareholderForm from "./Newshareholders";
const investors = [
  {
    name: "Temple Innovate VC",
    type: "Cash",
    scheme: "-",
    pss: "$0.42",
    shares: "402,000",
    investment: "$402,000",
    icon: google,
  },
  {
    name: "ABT Growth Capital",
    type: "Cash",
    scheme: "-",
    pss: "$0.42",
    shares: "402,000",
    investment: "$2302,000",
    icon: azure,
  },
  {
    name: "Kailash Jai Krishan",
    type: "Cash",
    scheme: "-",
    pss: "$0.42",
    shares: "402,000",
    investment: "$23,000",
    icon: microsoft,
  },
  {
    name: "Bret Richard",
    type: "Cash",
    scheme: "-",
    pss: "$0.42",
    shares: "402,000",
    investment: "$402,000",
    icon: azure,
  },
  {
    name: "Credit JV",
    type: "Cash",
    scheme: "-",
    pss: "$0.42",
    shares: "402,000",
    investment: "$42,000",
    icon: microsoft,
  },
];

const InvestmentDashboard = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="p-6  min-h-screen">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Investment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-gray-700">1,500,000</div>
            <div className="text-sm text-gray-500">$ USD</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Shares for Investment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-gray-700">354,560</div>
            <div className="text-sm text-gray-500">Shares</div>
          </CardContent>
        </Card>
      </div>
      <div className="py-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-900">Investors</h2>
        <div className="space-x-2">
            <AddNewShareholderForm isOpen={isOpen} onClose={() => setIsOpen(false)}/>
          <Button
          onClick={() => setIsOpen(true)}
            variant="outline"
            className="text-indigo-500 hover:text-indigo-600  border"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Share Class
          </Button>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Shareholders
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-500">Name</TableHead>
              <TableHead className="text-gray-500">Type</TableHead>
              <TableHead className="text-gray-500">Scheme</TableHead>
              <TableHead className="text-gray-500">PSS</TableHead>
              <TableHead className="text-gray-500">Shares</TableHead>
              <TableHead className="text-gray-500">Investment</TableHead>
              <TableHead className="text-gray-500"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investors.map((investor, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium flex items-center">
                  <Image src={investor.icon} alt="" className="mr-2 text-2xl" />
                  {investor.name}
                </TableCell>
                <TableCell>{investor.type}</TableCell>
                <TableCell>{investor.scheme}</TableCell>
                <TableCell>{investor.pss}</TableCell>
                <TableCell>{investor.shares}</TableCell>
                <TableCell>{investor.investment}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-rounded text-slate-600">
                      edit
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="outline-none ">
                        <span className="material-symbols-rounded text-slate-600">
                          more_vert
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <div className="hover:bg-[#ECECFF] p-2 flex items-center gap-2 cursor-pointer rounded-md ">
                          <span className="material-symbols-rounded">add</span>
                          Add new Investment
                        </div>
                        <div className="hover:bg-[#ECECFF] p-2 flex items-center gap-2 cursor-pointer rounded-md ">
                          <span className="material-symbols-rounded">star</span>
                          Set as Lead Investor
                        </div>
                        <div className="hover:bg-[#ECECFF] p-2 flex items-center gap-2 cursor-pointer rounded-md text-red-500">
                          <span className="material-symbols-rounded">
                            person_remove
                          </span>
                          Remove investment
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvestmentDashboard;
