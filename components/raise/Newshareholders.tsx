// @ts-nocheck

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react';

const companies = [
  { id: 1, name: 'UK Companies House', number: '12800782', incorporated: '10 Aug 2020', location: 'Menlo Park, California, United States' },
  { id: 2, name: 'Google LLC', number: '3582691', incorporated: '4 Sep 1998', location: 'Mountain View, California, United States' },
  { id: 3, name: 'Apple Inc.', number: '0976545', incorporated: '1 Apr 1976', location: 'Cupertino, California, United States' },
  { id: 4, name: 'Microsoft Corporation', number: '600413485', incorporated: '4 Apr 1975', location: 'Redmond, Washington, United States' },
  { id: 5, name: 'Amazon.com, Inc.', number: '91-1646860', incorporated: '5 Jul 1994', location: 'Seattle, Washington, United States' },
];

const AddNewShareholderForm = ({ isOpen, onClose }:{
  isOpen:boolean,
  onClose:(value: React.SetStateAction<boolean>) => void
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [companyName, setCompanyName] = useState('');

  const handleCompanySelect = (companyId) => {
    const company = companies.find(c => c.id.toString() === companyId);
    if (company && !selectedCompanies.some(sc => sc.id === company.id)) {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const removeCompany = (companyId) => {
    setSelectedCompanies(selectedCompanies.filter(c => c.id !== companyId));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Add New Shareholder</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name</Label>
            <Input 
              id="companyName" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter your company name without the LTD or other suffix, e.g NewCo" 
              className="w-full border-gray-300 rounded-md" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companySelect" className="text-sm font-medium text-gray-700">Select Companies</Label>
            <Select onValueChange={handleCompanySelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id.toString()}>{company.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Selected Companies</Label>
            <div className="flex flex-wrap gap-2">
              {selectedCompanies.map((company) => (
                <Badge key={company.id} variant="secondary" className="flex items-center gap-1">
                  {company.name}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeCompany(company.id)} />
                </Badge>
              ))}
            </div>
          </div>

          <ScrollArea className="h-[200px] w-full rounded-md border border-gray-200 p-4">
            {selectedCompanies.map((company) => (
              <div key={company.id} className="mb-4 last:mb-0">
                <h3 className="text-sm font-semibold">{company.name}</h3>
                <p className="text-xs text-gray-500">{company.number} - Incorporated on {company.incorporated}</p>
                <p className="text-xs text-gray-500">{company.location}</p>
              </div>
            ))}
          </ScrollArea>

          <div className="flex justify-between">
            <Button variant="outline" onClick={onClose}>Back</Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">Finish</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewShareholderForm;