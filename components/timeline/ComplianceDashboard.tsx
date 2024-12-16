import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ComplianceDashboardProps {
  complianceHealth: number;
  pendingCompliance: number;
  completedCompliance: number;
  incorporationDate: string;
}

const ComplianceDashboard: React.FC<ComplianceDashboardProps> = ({
  complianceHealth,
  pendingCompliance,
  completedCompliance,
  incorporationDate,
}) => {
  return (
    <div className="w-full  grid grid-cols-[280px_auto_1fr] gap-6  h-[108px]">
  <section className="grid grid-rows-3 h-[108px]">
    <p className="font-semibold text-xl text-main">Compliance</p>
    <p className="font-medium text-sm text-textlight">Stay on Track with Your Compliance Timeline</p>
    <p className="font-medium text-sm text-textlight mt-auto">
      Incorporation Date: <span className="text-main">{incorporationDate}</span>
    </p>
  </section>
  
  <section className="w-[1px] h-[108px] bg-stroke"></section>
  
  <section className="grid grid-cols-3 h-[108px] gap-3">
    <div className="border rounded-md flex flex-col p-3 justify-between">
      <h3 className='font-semibold text-[32px] text-[#68c052]'>{complianceHealth}%</h3>
      <p className='font-semibold text-base text-main'>Compliance Health</p>
    </div>
    <div className="border rounded-md flex flex-col p-3 justify-between">
      <h3 className='font-semibold text-[32px] text-slate-800'>{pendingCompliance}</h3>
      <p className='font-semibold text-base text-main'>Pending Compliance</p>
    </div>
    <div className="border rounded-md flex flex-col p-3 justify-between">
      <h3 className='font-semibold text-[32px] text-slate-800'>{completedCompliance}</h3>
      <p className='font-semibold text-base text-main'>Completed Compliance</p>
    </div>
  </section>
</div>

  );
};

export default ComplianceDashboard;