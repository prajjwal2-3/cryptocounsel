import Link from "next/link"
import { Card } from "../ui/card"

export default function Cards() {
    const cardData=[
        {
          "title": "Draft a Contract",
          "description": "Create a new legal contract tailored to your needs",
          "icon": "contract_edit",
          "link": "/create"
        },
        {
          "title": "Check for Conflicts",
          "description": "Scan documents for any conflicting terms or clauses",
          "icon": "quick_reference_all",
          "link": "/conflictcheck"
        },
        {
          "title": "Review Documents",
          "description": "Go through and finalize documents for commercial transactions ",
          "icon": "tv_options_edit_channels",
          "link": "/review"
        },
       
      ]
      
  return (
    <div className=' grid grid-cols-3 gap-3'>
   
      {
        cardData.map((e,index)=>
          <Link href={e.link} key={index}>
            <Card  className={`p-3 gap-5 group flex flex-col  border-stroke rounded-[8px] ${index===0?'bg-gradient-to-r from-[#565CFF] from-10% via-[#765BF9] via-30% to-[#CB59E8] to-90%':'bg-stroke border'} `}>
        <span className='flex justify-between'>
        <span className={`material-symbols-rounded  text-white w-5 h-5 font-light`}>
        {e.icon}
        </span>
        <span className={`material-symbols-rounded text-white w-5 h-5  text-[20px] font-light`}>north_east</span>
        </span>
        <section className='flex flex-col gap-2 justify-between'>
            <p className={`font-semibold text-sm text-white`}>{e.title}</p>
            <p className={`font-medium text-xs text-white/60`}>{e.description}</p>
        </section>
              </Card>
              </Link>
        )
      }
    </div>
  )
}
