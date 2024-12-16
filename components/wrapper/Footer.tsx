import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: "NAVIGATION",
    items: ["Enterprise", "Pricing", "Docs", "FAQs"]
  },
  {
    title: "WHAT WE DO",
    items: ["Encouraging Testing", "Strengthening Advocacy", "Sharing Information", "Building Leadership", "Engaging With Global Fund", "Sharing e-Light"]
  },
  {
    title: "LEGAL",
    items: ["General Info", "Privacy Policy", "Terms of Service"]
  },
  {
    title: "TALK TO US",
    items: ["support@conqr.com", "+91 99 9999 999", "Contact Us", "Career"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8 bg-gray-600" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">CONQR</div>
          <div className="text-sm text-gray-300">© 2024 Conqr. All Rights Reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook size={20} className="cursor-pointer hover:text-blue-400" />
            <Linkedin size={20} className="cursor-pointer hover:text-blue-400" />
            <Twitter size={20} className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;