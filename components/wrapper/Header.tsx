import { getKindeServerSession, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink,LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import { ChevronDown } from "lucide-react";
import Logo from "../Logo";
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
import Link from "next/link";
import { Button } from "../ui/button";
import CommandBar from "./CommandBar";
export default async function Header() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUser = await isAuthenticated();
  const user = await getUser();
  return (
    <header className="grid grid-cols-3 bg-background   fixed  border px-4 !z-10  h-16 items-center   max-w-screen-2xl w-full ">
      <Link href='/' className="mr-auto font-extrabold text-indigo-400 text-2xl">
      CRYPTO COUNSEL
      </Link>
      <div className="">
      <CommandBar isSide={!isUser} isHead/>
      </div>
      
      
      <section className="text-foreground/70 ml-auto">
        {isUser ? (
          <section className="flex flex-row gap-2 p-2">
            <Image
              src={user?.picture ? user.picture : ""}
              alt="user image"
              width={48}
              height={24}
              className="rounded-full"
            />
            <section className="">
              <p className="font-semibold text-foreground text-base">
                {user?.given_name} {user?.family_name}
              </p>
              <p className="font-medium text-xs">{user?.email}</p>
            </section>
            <DropdownMenu >
      <DropdownMenuTrigger asChild>
       <ChevronDown className="my-auto text-foreground/40 hover:text-foreground cursor-pointer"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-6 bg-background text-foreground mr-6">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-stroke" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-stroke" />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-stroke"/>
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-stroke" />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-stroke"/>
       <LogoutLink>
       <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
       </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
          </section>
        ) : (
          <div className="space-x-4 ">
            <LoginLink className='text-main bg-white border border-stroke hover:bg-gray-200  rounded-lg  p-2'>Login</LoginLink>
            <RegisterLink className='text-white bg-main rounded-lg  p-2'>Book a Demo</RegisterLink> 
          </div>   
        )}
      </section>
    </header>
  );
}
