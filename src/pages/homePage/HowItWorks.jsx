import React from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  LockClosedIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import ChooseLoan from "../../assets/imgs/Sign in page.png";
import ChooseLoan2 from "../../assets/imgs/images/step2.svg";
import ChooseLoan3 from "../../assets/imgs/images/step3.svg";
import ChooseLoan4 from "../../assets/imgs/images/step4.svg";
import ChooseLoan5 from "../../assets/imgs/images/step5.svg";
import { Link as DomLink, NavLink } from "react-router-dom";

const HowItWorksData = [
  {
    h1: "1. Sign In",
    p: "Sign in and complete your KYC to book a loan.",
    class: "sm:ml-6 ml:2 border-l border-gray-400 pl-10 -ml-0 h-[100px]",
  },
  {
    h1: "2. Loan Application",
    p: "Input your preferred loan amount, tenure, and net pay, view your repayment schedule, and proceed.",
    class: "sm:ml-6 ml:2 border-l border-gray-600 pl-10 -ml-0 h-[100px]",
  },
  {
    h1: "3. Document Upload",
    p: "Upload all required document.",
    class: "sm:ml-6 ml:2  border-l border-gray-600 pl-10 -ml-0 h-[100px]",
  },
  {
    h1: "4. Loan Contract Agreement",
    p: "View your loan offer and sign the loan contract agreement.",
    class: "mb-10 sm:ml-6 ml:2 pl-10 -ml-0",
  },
  {
    h1: "5. Dashboard",
    p: "Track your loan status, view your transaction history, or repay your loan from your dashboard.",
    class: "mb-10 sm:ml-6 ml:2 pl-10 -ml-0",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HowItWorks({ handleClickOpen }) {
  return (
    <div className="p-4 text-white bg-gradient-radial from-gray-900 to-black">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:text-center mt-12">
        <h1 className="font-NexaBold text-[36px]">How to Apply</h1>
        <p className="text-[16px] text-white">Get started in 5 steps</p>
      </div>

      <TabGroup>
        <div className="sm:flex gap-4 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between items-center mt-8">
          <div className="sm:max-w-[50%] mt-12 lg:mt-0">
            <TabList>
              <ol className="relative">
                {HowItWorksData.map((item) => (
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "focus:outline-none tap-transparent",
                        selected ? "pointer-events-none" : "opacity-50"
                      )
                    }
                  >
                    <li className={item.class}>
                      <span className="absolute flex items-center justify-center w-[10px] h-[10px] bg-white rounded-full sm:left-[19px] -left-[5px] ring-8 ring-transparent"></span>
                      <h3 className="flex items-center mb-1 sm:text-[22px] font-NexaBold font-extrabold">
                        {item.h1}
                      </h3>
                      <p className=" text-base text-left font-normal font-dmsans dark:text-gray-400 text-[14px]">
                        {item.p}
                      </p>
                    </li>
                  </Tab>
                ))}
              </ol>
            </TabList>
          </div>

          <TabPanels>
            <div className="sm:mx-2 mx-auto">
              <TabPanel>
                {" "}
                <img src={ChooseLoan} alt="Accello Hero" />
              </TabPanel>
              <TabPanel>
                {" "}
                <img src={ChooseLoan2} alt="Accello Hero" />
              </TabPanel>
              <TabPanel>
                {" "}
                <img src={ChooseLoan3} alt="Accello Hero" />
              </TabPanel>
              <TabPanel>
                {" "}
                <img src={ChooseLoan4} alt="Accello Hero" />
              </TabPanel>
              <TabPanel>
                {" "}
                <img src={ChooseLoan5} alt="Accello Hero" />
              </TabPanel>
            </div>
          </TabPanels>
        </div>
      </TabGroup>

      {/* <DomLink to="/loan/signin"> */}
      <div className="text-center">
        <DomLink to="/loan/signin">
          <button
            type="button"
            className="inline-flex border-2 border-white rounded-lg  bg-white mt-8 lg:mt-0 2xl:py-4 2xl:px-8 font-dmsans font-medium mb-8 py-2.5 md:mt-2 2xl:md-1 text-[#04265F]  px-10 gap-2 text-center items-center hover:bg-transparent hover:text-white"
          >
            Get Started
            <ArrowRightIcon className="block h-4 w-3" aria-hidden="true" />
          </button>
        </DomLink>
      </div>
      {/* </DomLink> */}

      {/* <hr className='mx-auto max-w-7xl my-12'/> */}
    </div>
  );
}

export default HowItWorks;
