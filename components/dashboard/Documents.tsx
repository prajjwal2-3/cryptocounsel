import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "../ui/separator";
export default function Documents() {
  const barsData = [
    {
      color: "#00BFFF",
      width: "100px",
      title: "Created Document",
      quantity: 23,
    },
    {
      color: "#FFA07A",
      width: "75px",
      title: "Pending Approval",
      quantity: 12,
    },
    {
      color: "#7B68EE",
      width: "125px",
      title: "Shared Document",
      quantity: 28,
    },
    {
      color: "#FFB6C1",
      width: "50px",
      title: "Pending Signature",
      quantity: 14,
    },
    {
      color: "#90EE90",
      width: "90px",
      title: "Signed Documents",
      quantity: 32,
    },
  ];
  const recentDocuments = [
    {
      color: "#FFA07A",
      name: "Board Resolution June 2024",
      status: "Pending Approval",
      time: "10m ago",
    },
    {
      color: "#FFB6C1",
      name: "NDA Devolt x Suregro",
      status: "Pending Signature",
      time: "34m ago",
    },
    {
      color: "#7B68EE",
      name: "Loan Agreement HSBC x Suregro",
      status: "Shared Document",
      time: "2h ago",
    },
  ];
  return (
    <div className="w-[30%]">
      <Card className="border p-4 bg-stroke divide-y-2 flex flex-col  divide-dashed divide-foreground  border-stroke !rounded-b-none rounded-t-[8px]">
        <section className="flex justify-between ">
          <span className="font-semibold text-base text-foreground flex items-center gap-1">
            Documents{" "}
            <span className="material-symbols-rounded text-base">
              north_east
            </span>{" "}
          </span>
          <div className="w-fit border-2 border-foreground/70 flex justify-center cursor-pointer items-center rounded-[8px] p-1">
            <span className="material-symbols-rounded text-foreground/70">add</span>
          </div>
        </section>
        <section className="flex py-4 mt-4 flex-col gap-2 ">
          <section className="flex justify-between ">
            <span className="font-medium text-sm text-foreground/80">Total</span>
            <span className="font-semibold text-sm text-foreground">120</span>
          </section>
          <div className="flex space-x-1 ">
            {barsData.map((bar, index) => (
              <div
                key={index}
                style={{ backgroundColor: bar.color, width: bar.width }}
                className="h-4 rounded-md"
              />
            ))}
          </div>
        </section>
        <section className="py-4 flex flex-col gap-2">
          {barsData.map((e, index) => (
            <span
              key={index}
              className="text-foreground/80 w-full flex justify-between"
            >
              <p className="flex gap-1 items-center">
                <span
                  style={{ backgroundColor: e.color }}
                  className="w-2 h-2  rounded-full"
                ></span>
                {e.title}
              </p>
              <p className="text-foreground/70 font-medium">{e.quantity}</p>
            </span>
          ))}
        </section>
      </Card>
      <Card className="!border-l-0 !border-r-0 !rounded-t-none border border-foreground p-4 bg-stroke rounded-b-[8px]">
        <p className="font-semibold text-sm text-foreground">Recent documents</p>
        {recentDocuments.map((e, index) => (
          <section key={index} className="border-y border-stroke py-3">
            <span className="font-medium text-sm text-foreground/70">{e.name}</span>
            <section className="flex justify-between">
              <span className="flex gap-2 items-center">
                <span style={{backgroundColor:e.color}} className="w-2 h-2  rounded-full"></span>
                <span style={{color:e.color}} className="text-xs">{e.status}</span>
              </span>
              <span className="text-foreground/70 text-sm">{e.time}</span>
            </section>
          </section>
        ))}
      </Card>
    </div>
  );
}
