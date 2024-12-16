import Piechart from "./Piechart";
import Pielabel from "./Pielabel";


export default function Contracts() {
  return (
    <div className="border p-6 rounded-xl w-7/12 flex flex-col gap-6">
        <p className="font-semibold text-[18px] text-slate-800">Contracts & Documents</p>
      <section className="flex flex-row gap-6">
      <Piechart/>
      <Pielabel/>
      </section>
    </div>
  )
}
