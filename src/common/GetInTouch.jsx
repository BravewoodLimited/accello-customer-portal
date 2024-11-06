import React from "react";
import facebook from "../assets/imgs/facebook.svg";
import twitter from "../assets/imgs/twitter.svg";
import instagram from "../assets/imgs/instagram.svg";
import linkedin from "../assets/imgs/linkedin.svg";

const GetInTouch = () => {
  return (
    <div className="max-w-[1024px] mx-auto w-full  ">
      <p className="text-center font-dmsans  mt-8">
        See the different ways to get in touch with us.
      </p>
      <div className="w-full mt-4">
        <div className="w-full bg-[#EBF2FF] rounded-[20px] py-[70px]  px-4 lg:px-[100px] grid  gap-8 sm:grid-cols-2">
          <div className="flex flex-col">
            <p className="font-dmsans font-medium text-[26px]">Head Office</p>
            <p className="font-dmsans text-[14px] text-[#5B5B5B]">
              2C Ayo Rosiji Crescent, Ikeja GRA, Lagos, Nigeria.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-dmsans font-medium text-[26px]">Opening Hours</p>
            <p className="font-dmsans text-[14px] text-[#5B5B5B]">
              9am-5pm, every weekday
            </p>
          </div>{" "}
          <div className="flex flex-col">
            <p className="font-dmsans font-medium text-[26px]">Mobile</p>
            <p className="font-dmsans text-[14px] text-[#5B5B5B]">
              070002223556
            </p>
          </div>{" "}
          <div className="flex flex-col">
            <p className="font-dmsans font-medium text-[26px]">Whatsapp</p>
            <p className="font-dmsans text-[14px] text-[#5B5B5B]">
              08107258837
            </p>
          </div>
          <div className="col-span-2 flex items-center gap-4">
            <a target="_blank" className="hover:scale-[1.3] duration-300" href="https://web.facebook.com/accello.ngn/">
              <img src={facebook} alt="" />
            </a>
            <a target="_blank" className="hover:scale-[1.3] duration-300"      href="https://www.instagram.com/accello_ng/"
          >
              <img src={instagram} alt="" />{" "}
            </a>
            <a target="_blank" className="hover:scale-[1.3] duration-300"  href="https://twitter.com/Accello_ng"
           >
              {" "}
              <img src={twitter} alt="" />
            </a>
            <a target="_blank" className="hover:scale-[1.3] duration-300"    href="https://www.linkedin.com/company/accello-ng"
              >
              
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
