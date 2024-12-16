import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import "./prosemirror.css"
import "@uploadthing/react/styles.css";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "@/components/wrapper/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import LandingPage from "@/components/LandingPage";
import { Toaster } from "@/components/ui/toaster"

const inter = DM_Sans({ subsets:['latin']})


export const metadata: Metadata = {
  title: "Conqrr",
  description: "Made by team conqr",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {isAuthenticated,getUser}=getKindeServerSession()
  const flag  = await isAuthenticated()
  const user = await getUser()

  return (
    <html lang="en" >
      <body className={inter.className}>
     
      <div className="max-w-screen-2xl shadow-md w-full mx-auto ">
        <Header/>
        {
          flag&&user?.email?
          // aur bhi aaega idhar
          <div className=" flex pt-10 flex-row border-x">
          <Sidebar/>
       <div className="ml-[calc(100vw/6)] min-h-screen w-full">  {children}</div>
         </div>:
         <>
         <Header/>
         <div className="pt-16">
          <LandingPage/>
         
         </div>
         </>
        }
    
    <Toaster />
      </div>
     
        </body>
    </html>
  );
}
