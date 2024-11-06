import React from "react";

import money from "../../assets/Landing/money.svg";
import percent from "../../assets/Landing/percent.svg";
import calendar from "../../assets/Landing/calendar.svg";

import Nav from "./Nav";
import Hero from "./Hero";
import LoansForYou from "./LoansForYou";
import Calculator from "./Calculator";
import HowItWorks from "./HowItWorks";
import Difference from "./Difference";
import Footer from "./Footer";
import MobileApp from "./MobileApp";
import LoanApplicationModal from "./LoanApplicationModal";
import Testimonials from "./Testimonials";

const HeroBottom = [
  { img: money, p1: "Loans Up to", p2: "₦5,000,000" },
  { img: percent, p1: "Rates Starting From", p2: "3.45%" },
  { img: calendar, p1: "Terms Ranging From", p2: "1-36 months" },
];

console.log("yeah");

function Landing() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="relative bg-gradient-radial  sm:min-h-[258px] overflow-hidden">
        <Nav handleClickOpen={handleClickOpen} />
        <Hero />

        <p className="text-center text-[#D48305] font-dmsans  text-sm italic lg:mt-10 ">
          A product of Bravewood Finance Company Limited.
        </p>
        <div className="hidden lg:flex flex-col gap-4 pt-4 min-h-[88px] bg-bgOpacity mt-[2px] text-white">
          <div className="flex justify-around 2xl:mx-[300px] items-center">
            {HeroBottom.map((item) => (
              <div className="flex gap-2 ">
                <div className="bg-white/10 h-10 w-10 rounded-full  flex items-center justify-center">
                  <img src={item.img} alt="" className="object-contain" />
                </div>
                <div className="font-NexaLight">
                  <p className="text-[13px] font-normal font-dmsans">
                    {item.p1}
                  </p>
                  <p className="font-bold font-NexaBold text-[20px] ">
                    {item.p2}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white font-dmsans   text-center text-[10.42px] ">
            *Rates are determined by several factors, terms and the conditions
            of loans
          </p>
        </div>
      </div>

      <div>
        <Difference />
        <LoansForYou />
        <HowItWorks handleClickOpen={handleClickOpen} />
        <Calculator handleClickOpen={handleClickOpen} />
        <MobileApp />
        <Testimonials />
        <Footer />
      </div>

      <LoanApplicationModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Landing;
