import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Monitor, Bed, RotateCw ,BadgeCheck} from 'lucide-react';
import {  CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, Calendar, ClipboardCheck, AlertTriangle } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
interface ComplianceDetail {
  triggeringProvision: string;
  detailedProvision: string;
  statutoryTimelineDueDate: string;
  form: string;
  reportingAuthority: string;
}

const Timeline: React.FC = () => {
  const items: ComplianceDetail[] = [
    {
      "triggeringProvision": "Section 10 A",
      "detailedProvision": "Declaration of commencement of business",
      "statutoryTimelineDueDate": "Within 180 Days from the incorporation date",
      "form": "INC- 20A",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 89 (6)",
      "detailedProvision": "Intimation of declaration received under Section 89",
      "statutoryTimelineDueDate": "Within 30 days from the date of receipt of the declaration by the company",
      "form": "MGT-6",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 90 (4)",
      "detailedProvision": "Return of the significant beneficial owner",
      "statutoryTimelineDueDate": "Within 30 days from the receipt of the declaration by the company",
      "form": "BEN- 2",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Rule 12A of Companies (Appointment and Qualification of Directors) Rules 2014",
      "detailedProvision": "Directors’ KYC by every Individual who holds a DIN",
      "statutoryTimelineDueDate": "Within 6 months from the end of the financial year, 30th September",
      "form": "DIR – 3 KYC",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 139",
      "detailedProvision": "Notice to the Registrar by the company for appointment of an auditor",
      "statutoryTimelineDueDate": "Within 15 days of the appointment of an auditor",
      "form": "ADT - 1",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 139(6)",
      "detailedProvision": "Appointment of First Statutory Auditor",
      "statutoryTimelineDueDate": "Appoint within 30 days from the incorporation date",
      "form": "NA",
      "reportingAuthority": "NA"
    },
    {
      "triggeringProvision": "Section 140",
      "detailedProvision": "Notice of resignation by the auditor",
      "statutoryTimelineDueDate": "Within 30 days from the date of the resignation",
      "form": "ADT – 3",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 117 (except clause g)",
      "detailedProvision": "Filing of Resolutions and agreements to the Registrar",
      "statutoryTimelineDueDate": "Within 30 days of the passing of the resolution/entering into agreement",
      "form": "MGT – 14",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 12",
      "detailedProvision": "Intimation of Change in the Registered Office",
      "statutoryTimelineDueDate": "Within 30 days of the change of the address",
      "form": "INC-22",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Order dated 22 January, 2019 issued under Section 405",
      "detailedProvision": "Return in respect of outstanding payments to Micro or Small Enterprise",
      "statutoryTimelineDueDate": "Within 1 month from the conclusion of each half year, 31st October (For April-Sep), 30th April (For Oct-Mar)",
      "form": "E-Form MSME-1",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Rule 5 (8) of IEPF Authority (Accounting, Audit, Transfer and Refund) Rules, 2016",
      "detailedProvision": "Statement of unclaimed and unpaid amounts as specified in section 125",
      "statutoryTimelineDueDate": "Within a period of 60 days after the holding of AGM",
      "form": "IEPF -2",
      "reportingAuthority": "IEPFA"
    },
    {
      "triggeringProvision": "Rule 16 of Companies (Acceptance of Deposits) Rules, 2014",
      "detailedProvision": "Return of deposit or particulars of transaction not considered as deposit or both",
      "statutoryTimelineDueDate": "On or before 30th June of every year",
      "form": "DPT-3",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 137",
      "detailedProvision": "Filing of annual accounts",
      "statutoryTimelineDueDate": "30 days from the date of the AGM",
      "form": "Form AOC-4/AOC-4 CFS/AOC-4 XBRL",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 92",
      "detailedProvision": "Filing of annual return",
      "statutoryTimelineDueDate": "To be filed within 60 days from the conclusion of AGM",
      "form": "E - Form MGT - 7",
      "reportingAuthority": "ROC"
    },
    {
      "triggeringProvision": "Section 184",
      "detailedProvision": "Disclosure of Interest by Director",
      "statutoryTimelineDueDate": "In the First Board Meeting of the Financial Year, whenever there is a change in the disclosures already made",
      "form": "MBP-1",
      "reportingAuthority": "NA, as the Director concerned is required to disclose this to the Company"
    }
  ]
  

  return (
    <div className="bg-white p-6 rounded-lg max-w-6xl mx-auto">
    <div className="relative">
      {items.map((item, index) => (
        <div key={index} className="flex items-center mb-8 last:mb-0">
          <div className="flex-1 text-right mr-4">
            {index % 2 === 0 && (
              <>
                <p className="font-bold">{item.triggeringProvision}</p>
                <p className="text-sm text-gray-600">{item.detailedProvision}</p>
              </>
            )}
          </div>
          <div className="relative flex flex-col items-center">
            <Card className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-white shadow z-10">
            <CardContent className="p-0 z-[1]">
                <BadgeCheck className="h-6 w-6 text-green-500" />
              </CardContent>
              <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
             
              </TooltipTrigger>
              <TooltipContent className='z-[2]'>
              <Card className="max-w-md mx-auto p-4 shadow-lg rounded-lg border border-gray-200">
      <CardHeader className="flex items-center space-x-4">
        <FileText className="text-blue-600 w-6 h-6" />
        <CardTitle>{item.triggeringProvision}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <ClipboardCheck className="text-green-500 w-5 h-5" />
          <CardDescription>{item.detailedProvision}</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="text-orange-500 w-5 h-5" />
          <CardDescription>{item.statutoryTimelineDueDate}</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <FileText className="text-purple-500 w-5 h-5" />
          <CardDescription>Form: {item.form}</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <AlertTriangle className="text-red-500 w-5 h-5" />
          <CardDescription>Reporting Authority: {item.reportingAuthority}</CardDescription>
        </div>
      </CardContent>
    </Card>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
            </Card>
            {index < items.length - 1 && (
              <div className="w-0.5 h-full bg-gray-300 absolute top-full"></div>
            )}
          </div>
          
          <div className="flex-1 ml-4">
            {index % 2 !== 0 && (
              <>
                <p className="font-bold">{item.triggeringProvision}</p>
                <p className="text-sm text-gray-600">{item.detailedProvision}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Timeline;