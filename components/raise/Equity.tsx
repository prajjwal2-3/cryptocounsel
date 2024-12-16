'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import Dashboard from './Dashboard';
import InvestmentDashboard from './Investors';

const Equity = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const tabs = ['Dashboard', 'Investors', 'Data Room', 'Groups'];
  return (
   <>
     <nav className="flex items-center border-b mt-6 border-gray-200">
      <div className="text-gray-500 px-4 py-2 border-r flex items-center">
        <Link href='/raise'>Raise</Link>
        <span className="mx-2">&gt;</span>
        <span className="font-semibold">Equity</span>
      </div>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 ${
            activeTab === tab
              ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
    <div className="sm:p-6 p-0.5">
      {
        activeTab==='Dashboard'?
        <Dashboard/>:
        <InvestmentDashboard/>
      }
     
    </div>
   </>
  )
}

export default Equity
