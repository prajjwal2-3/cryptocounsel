import type { Metadata } from "next";

import { redirect } from "next/navigation";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function layout({children}: {children: React.ReactNode}) {
    const { isAuthenticated } = getKindeServerSession();
    if(!(await isAuthenticated())){
        redirect(
          '/api/auth/login'
        )
      }
  return (
    <div className="">
       {children}
    </div>
  )
}
