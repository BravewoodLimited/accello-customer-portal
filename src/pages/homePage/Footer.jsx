import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/imgs/footerlogo.svg";
import { RiFacebookCircleLine, RiLinkedinBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link as DomLink } from "react-router-dom";
import cbnlogo from "../../assets/Landing/cbnlogo.png";
import Regulated from "common/Regulated";

function Footer() {
  return (
    <div className="px-4 py-[80px] pb-4 text-white bg-black lg:block flex flex-col items-center">
      <div className="grid   sm:grid-cols-1  items-start sm:gap-6  lg:grid-cols-4  lg:gap-16   mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  sm:space-y-0 space-y-16">
        <div className="space-y-4 text-white w-full  ">
          <div>
            <img src={Logo} alt="" className=" object-contain" />
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker className="w-6 h-6" />
            <p className="w-[273px]">
              No 2C Ayo Rosiji Crescent, Ikeja GRA, Lagos.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BiPhone className="w-6 h-6" />
            <p>07002223556</p>
          </div>
          <div className="flex items-center gap-2">
            <IoMailOutline className="w-6 h-6" />
            <p>loans@accello.ng</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <p className="text-[#A7A7A7]">Company:</p>
          <DomLink to={"/"}>
            <p>Home</p>
          </DomLink>
          <DomLink to={"/about-us"}>
            <p>About Us</p>
          </DomLink>
          <DomLink to={"/faqs"}>Faqs</DomLink>
          <DomLink to={"/contact"}>Contact Us</DomLink>
        </div>

        <div className="space-y-2 w-full ">
          <p className="text-[#A7A7A7]">Follow:</p>

          <div className="flex gap-x-4">
            <DomLink
              to="https://facebook.com/accello.ngn"
              target="_blank"
              className="flex items-center gap-2"
            >
              <RiFacebookCircleLine className="w-6 h-6" />
            </DomLink>

            <DomLink
              to="https://twitter.com/Accello_ng"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FiTwitter className="w-6 h-6" />
            </DomLink>

            <DomLink
              to="https://www.instagram.com/accello_ng/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaInstagram className="w-6 h-6" />
            </DomLink>

            <DomLink
              to="https://www.linkedin.com/company/accello-ng"
              target="_blank"
              className="flex items-center gap-2"
            >
              <RiLinkedinBoxLine className="w-6 h-6" />
            </DomLink>
          </div>
        </div>

        <div className="space-y-2 w-full">
          <p className="text-[#A7A7A7]">Legal:</p>
          <div className="flex flex-col gap-y-6">
            <DomLink to="/privacy-policy">
              {" "}
              <p>Terms and conditions</p>
            </DomLink>
            <DomLink to="/terms-and-conditions">
              {" "}
              <p>Privacy Policy</p>
            </DomLink>
          </div>
        </div>
      </div>

      {/* <hr className='opacity-20 my-12'/> */}

      <Regulated />
    </div>
  );
}
export default Footer;
