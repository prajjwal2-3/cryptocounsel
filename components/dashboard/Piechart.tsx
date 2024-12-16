'use client'
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { getChartData } from "@/actions/chart.action";
export default function Piechart() {
  const [dataset, setdataset] = useState([
    { id: "General Agreements", value: 0, color: "#475AC2" },
    { id: "Resolutions & Minutes", value: 0, color: "#C7469C" },
    { id: "Human Resource & External Advisors", value: 0, color: "#FFBA24" },
    { id: "Fundraise", value: 0, color: "#1F69FD" },
    { id: "Other documents", value: 0, color: "#835FDD" },
    { id: "Financial Docs", value: 0, color: "#02877F" },
  ]);
  useEffect(() => {
    async function getData() {
      const chartData = await getChartData();
      setdataset(chartData);
    }
    getData();
  }, []);
  return (
    
      <div className="relative flex 0 items-center justify-center  w-fit">
      <PieChart
      className="w-[210px]  h-[210px]  "
        series={[
          {
            data: dataset,
            innerRadius: 70,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
            cx: 100,
            cy: 100,
          },
        ]}
      />
      <div className="absolute  text-center">
        <div className="font-bold text-slate-800 text-3xl ">
          {dataset[0].value +
            dataset[1].value +
            dataset[2].value +
            dataset[3].value +
            dataset[4].value +
            dataset[5].value}
        </div>
        <div className="font-semibold text-slate-600 text-xl">Total</div>
      </div>
      </div>
      )
}
