import GaugeLabel from "./GaugeLabel";
import  Gagz  from "./RadialChart";


export default function GaugeChart() {
  return (
    <div className="border border-[#e5e5e5] p-6 rounded-xl flex-1 flex-grow flex flex-col gap-6">
       <p className="font-semibold text-[18px] text-slate-800">Compliance</p>
       <section className="flex flex-row gap-6">
        <Gagz/>
        <GaugeLabel/>
       </section>
    </div>
  )
}
