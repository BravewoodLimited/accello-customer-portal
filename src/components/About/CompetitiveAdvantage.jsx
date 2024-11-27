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
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 font-NexaBold">Our Competitive Advantage</h2>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6">
        <ul className="">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-center justify-between border-b last:border-none py-[14px]">
              <span className="text-[16px] font-dmsans font-medium">{advantage}</span>
              <CheckCircle className="h-6 w-6 text-[#04265F]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
