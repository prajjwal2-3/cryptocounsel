

export default function GaugeLabel() {
    
    const label = [
        { id: "General Agreements", color: "#475AC2" },
        { id: "Resolutions & Minutes", color: "#C7469C" },
        { id: "Human Resource", color: "#FFBA24" },
       
      ];
  return (
    <div className="grid grid-rows-3  ">
        {label.map((e, index) => (
          <div key={index} className="flex gap-2  items-center">
            <div style={{ backgroundColor: e.color }} className="w-2 h-2 rounded-full"></div>
            <div className="font-medium text-base text-slate-600">{e.id}</div>
          </div>
        ))}
      </div>
  )
}
