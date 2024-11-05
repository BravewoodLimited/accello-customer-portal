import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import {CheckBoxRounded, CheckCircle} from "@mui/icons-material"
// import { CheckCircleIcon } from '@heroicons/react/solid'; // You can use heroicons or any icon package

const CompetitiveAdvantage = () => {
  const advantages = [
    "No Guarantor",
    "Minimal Documentations",
    "Real-time Online Loan Processing",
    "Disbursement Within 6 Hours",
    "Reliable",
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Competitive Advantage</h2>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6">
        <ul className="space-y-4">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-center justify-between border-b last:border-none pb-4">
              <span className="text-lg font-medium">{advantage}</span>
              <CheckCircle className="h-6 w-6 text-[#04265F]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
