import { pages } from "../../data/Sidebar";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { LogoutLink,LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getKindeServerSession,RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import CommandBar from "../wrapper/CommandBar";
import Logo from "../Logo";
export default async function Sidebar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUser = await isAuthenticated();
  const user = await getUser();
  return (
    <div className="border-r w-2/12 pt-8 pb-6 flex  flex-col h-[calc(100vh-40px)] fixed ">
      <div className="flex  flex-col px-6">
       
      {/* <Link href='/' className="text-indigo-500 font-bold ml-3 text-2xl">CONQR</Link> */}
      
     
      {pages.slice(0, 2).map((e, index) => (
        <Link href={e.route} key={index}>
          <button
            className={`flex items-center ${
              index === 0 ? "text-white" : "text-white/50"
            } p-1 gap-1.5`}
          >
            <span className="material-symbols-rounded text-xl">{e.icon}</span>
            <p className="text-base font-medium ">{e.page}</p>
          </button>
        </Link>
      ))}
      <Separator className="my-1" />
      {pages.slice(2, 3).map((e, index) => (
        <Link href={e.route} key={index}>
          <button
                className={`flex items-center ${
                  e.page === "Dashboard"
                    ? "text-white"
                    : "text-white/50"
                } p-1.5 gap-1.5`}
              >
                <span className="material-symbols-rounded text-xl">{e.icon}</span>
                <p className="text-base font-medium ">{e.page}</p>
              </button>
        </Link>
      ))}
      {pages.slice(3, 8).map((e, index) => (
        <Link href={e.route} key={index}>
          <button
            className={`flex items-center ${
              e.page === "Dashboard" ? "text-white" : "text-white/50"
            } p-1 gap-1.5`}
          >
            <span className="material-symbols-rounded text-xl">{e.icon}</span>
            <p className="text-base font-medium ">{e.page}</p>
          </button>
        </Link>
      ))}
      <Separator className="my-1" />
      {pages.slice(8, 13).map((e, index) => (
       
          <button
          disabled
          key={index}
            className={`flex items-center ${
              e.page === "Dashboard" ? "text-[#767796]" : "text-[#767796]/50"
            } p-1 gap-1.5`}
          >
            <span className="material-symbols-rounded text-xl">{e.icon}</span>
            <p className="text-base font-semibold ">{e.page}</p>
          </button>
      
      ))}
      </div>
      
      
     
    </div>
  );
}
