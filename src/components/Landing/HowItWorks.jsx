import React from "react";
import { Tab } from "@headlessui/react";
import ChooseLoan from "../../assets/Landing/regScreen.png";
import ChooseLoan2 from "../../assets/Landing/ChooseLoan.png";
import ChooseLoan3 from "../../assets/Landing/ChooseLoan3.png";
import ChooseLoan4 from "../../assets/Landing/ChooseLoan4.png";

const HowItWorksData = [
  {
    h1: "1. Submit Your Application",
    p: "Sign up and complete your application online in few steps.",
    class: "sm:ml-6 ml:2 border-l border-gray-400 pl-10 -ml-0 h-[100px]",
  },
  {
    h1: "2. Choose your terms",
    p: "Pick your tenor and set your monthly payment date.",
    class: "sm:ml-6 ml:2 border-l border-gray-600 pl-10 -ml-0 h-[100px]",
  },
  {
    h1: "3. Get Your Money",
    p: "Receive your funds the same day if approved.",
    class: "sm:ml-6 ml:2  border-l border-gray-600 pl-10 -ml-0 h-[100px]",
  },
  {
    h1: "4. Access More",
    p: "Top-up your loans anytime you need more.",
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
        <p className="text-[16px] text-white">Get started in 4 steps</p>
      </div>

      <Tab.Group>
        <div className="sm:flex gap-4 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between mt-8">
          <div className="sm:max-w-[50%] mt-12">
            <Tab.List>
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
                      <h3 className="flex items-center mb-1 sm:text-[22px] font-NexaLight font-extrabold">
                        {item.h1}
                      </h3>
                      <p className="mb-4 text-base font-normal dark:text-gray-400 font-NexaLight">
                        {item.p}
                      </p>
                    </li>
                  </Tab>
                ))}
              </ol>
            </Tab.List>
          </div>

          <Tab.Panels>
            <div className="sm:mx-2 mx-auto">
              <Tab.Panel>
                {" "}
                <img src={ChooseLoan} alt="Accello Hero" />
              </Tab.Panel>
              <Tab.Panel>
                {" "}
                <img src={ChooseLoan2} alt="Accello Hero" />
              </Tab.Panel>
              <Tab.Panel>
                {" "}
                <img src={ChooseLoan3} alt="Accello Hero" />
              </Tab.Panel>
              <Tab.Panel>
                {" "}
                <img src={ChooseLoan4} alt="Accello Hero" />
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </div>
      </Tab.Group>

      {/* <DomLink to="/loan/signin"> */}
      <div className="text-center">
        <button
          type="button"
          className="border-2 border-white rounded-md bg-white 2xl:py-4 2xl:px-14 md:px-12 px-4 py-2.5 md:mt-2 2xl:md-1 text-black gap-2 text-center items-center hover:bg-transparent hover:text-white hover:border-white my-8 sm:my-4"
          onClick={handleClickOpen}
        >
          Get Started
          {/* <ArrowRightIcon className="block h-4 w-3" aria-hidden="true"/> */}
        </button>
      </div>
      {/* </DomLink> */}

      {/* <hr className='mx-auto max-w-7xl my-12'/> */}
    </div>
  );
}

export default HowItWorks;
