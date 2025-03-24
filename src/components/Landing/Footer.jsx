import React, { useEffect } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/imgs/footerlogo.svg";
import { RiFacebookCircleLine, RiLinkedinBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link as DomLink, useLocation } from "react-router-dom";

import Regulated from "common/Regulated";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // Scroll after a small delay to ensure content is loaded
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 1000); // Delay of 100ms before scrolling to the top
    };

    scrollToTop();
  }, [location]);
  return (
    <div className="px-4 pt-10 text-white bg-black">
      <div className="sm:flex gap-28 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between sm:space-y-0 space-y-16">
        <div className="space-y-3 text-white">
          <img src={Logo} alt="" className="w-[200px]" />
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

        <div className="space-y-6">
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

        <div className="space-y-6">
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
