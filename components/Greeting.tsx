// @ts-nocheck
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import CommandBar from "./wrapper/CommandBar"

export default async function Greeting() {
 const {getUser}=  getKindeServerSession()
 const user = await getUser()
 
  return (
    <div className="grid grid-rows-2 gap-6  w-[41%]">
     <section className="flex flex-col">
     <span className="font-semibold text-base">Hey {( 
        user?.given_name[0].toUpperCase
        ()+user?.given_name?.slice(1)
      )}</span>
      <span className="font-medium  text-textlight">What do we need to do today?</span>
     </section>
     <section>
        <CommandBar isSide={false} isHead={false}/>
     </section>
    </div>
  )
}
