import React from "react";

import Thunder from "../../assets/Landing/Difference/thunder.svg";
import Percentage from "../../assets/Landing/Difference/percentage.svg";
import Diamond from "../../assets/Landing/Difference/diamond.svg";
import Cash from "../../assets/Landing/Difference/cash.svg";
import Shield from "../../assets/Landing/Difference/shield.svg";
import WebGear from "../../assets/Landing/Difference/web.svg";

const LoveAccello = [
  {
    img: Thunder,
    h2: "Quick Decisions",
    p: "Get your funds within a few hours.",
  },
  { img: Percentage, h2: "Good rates", p: "Our rates are fair and competitive." },
  {
    img: Diamond,
    h2: "Easy to Use",
    p: "Apply for a loan with your phone - with zero stress!",
  },
  {
    img: Cash,
    h2: "Affordable Payments",
    p: "Pay back in a way that fits your pocket.",
  },
  {
    img: Shield,
    h2: "Simple Process",
    p: "No paperwork, no collateral, no guarantors",
  },
  {
    img: WebGear,
    h2: "Personalized",
    p: "Our loan services are personalized to fit each individuals needs and goals.",
  },
];

function Difference() {
  return (
    <div name="Why" className="p-4 text-black bg-landingbackground mb-8">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-12">
        <h1 className="font-NexaBold text-[36px]">
          Why Our Customers Love Accello
        </h1>
        <p className="text-[16px] text-black font-dmsans max-w-[554px] mx-auto w-full">
        We’re 100% focused on helping thousands of individuals in both public and private sector reach their goals.
        </p>
      </div>

      <div className="2xl:max-w-[70%] md:max-w-[90%] sm:mx-auto mx-4 mt-14 grid sm:grid-cols-2 lg:grid-cols-3 2xl:gap-x-[30px] md:gap-x-[30px] sm:gap-4">
        {LoveAccello.map((item) => (
          <div className="bg-white p-8  hover:scale-105 cursor-default duration-500  rounded-[15px] my-2">
            <div className="text-center">
              <img src={item.img} alt="" className="mb-2 mx-auto" />
              <h2 className="font-extrabold mb-2 text-[18px] font-gilroySemibold">
                {item.h2}
              </h2>
              <p className="text-black text-[16px] font-dmsans font-light">{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Difference;
