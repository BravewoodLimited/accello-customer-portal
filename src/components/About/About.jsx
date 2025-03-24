import React from "react";
import AboutImg from "../../assets/Landing/smile.png";


import { Link as DomLink } from 'react-router-dom';
import { SIGNIN } from "constants/urls";

function About() {
  return (
    <div className="p-4 text-black bg-landingbackground">
      {/* <h2 className='text-center font-NexaBold text-[40px] mt-10'>About us</h2> */}
      <div className="sm:flex gap-16 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:justify-between mt-8 items-center ">
        <div className="relative sm:max-w-[50%] mx-auto p-4">
          {/* <img src={AboutImg2} alt="Accello Hero" className='top-0'/> */}
          <img src={AboutImg} alt="Accello Hero" className=" top-8 mx-auto" />
        </div>

        <div className="sm:max-w-[50%] mt-12">
          {/* <p className='font-NexaLight text-[#D48305] text-[18px] font-100'>About Accello</p> */}

          <h1 className="lg:text-[36px] md:text-[36px] text-[36px] font-bold mb-5 leading-10">
            We're A New Kind Of <br /> Lending Company
          </h1>

          {/* <p className='text-[#4D4D4D] text-justify'>Accello is on a mission to build a community of free and financially empowered people. We are committed to delivering the best lending experience by providing fair and valuable financial products that support and facilitate achievement of individual financial dreams.</p><br />
                    <p className='text-[#4D4D4D] text-justify'>We are a digitally focused lending company helping everyone in both the public and private sectors access to funds by making finance accessible in a quick and simple way, anywhere, and at anytime.</p> */}

          <p>
            At Accello, we're building a community where money worries don't
            hold you back from achieving your goals and dreams.
            <br />
            <br />
            Need quick cash? We're here for you! With easy-to-get loans at the
            most competitive rates, whether you work for the government or a
            private company, we've got you covered.
            <br />
            <br />
            <br />
            Our simple online process means you can get money anytime, anywherez
            <br />
            – right from your phone!
            <br />
            We're not just another loan company. We're your partner in success,
            helping hardworking Nigerians like you take control of their
            finances. With Accello, your goals are within reach. Quick, simple,
            and fair – that's the Accello way. Join thousands of satisfied
            customers and start your journey to financial freedom today.
          </p>
          <DomLink to={SIGNIN}>
          <button
            type="button"
            className="hidden sm:block border-2 border-white rounded-md bg-accelloBlue py-3 px-12 text-white gap-2 mt-14 text-[16px] sm:w-auto w-[100%] mb-24 text-center items-center hover:bg-transparent hover:text-accelloBlue hover:border-accelloBlue"
          >
            Book a loan now <span aria-hidden="true">→</span>
          </button>
          </DomLink>
        </div>
      </div>
      {/* <hr className='mx-auto max-w-7xl my-12'/> */}
    </div>
  );
}

export default About;
