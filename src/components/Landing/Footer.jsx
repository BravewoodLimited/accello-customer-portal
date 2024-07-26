import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/Landing/NewLogo.png'
import { RiFacebookCircleLine, RiLinkedinBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';










function Footer() {
  return (
    <div className='px-4 py-[80px] text-white bg-black'>

        <div className='sm:flex gap-28 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between sm:space-y-0 space-y-16'>


                


            <div className='sm:max-w-[50%] '>
                <h1 className='font-NexaBold text-[28px] sm:text-[48px] sm:w-[431px]'>Get your first loan today!</h1>
                
                

            </div>



            <div className='sm:max-w-[50%] mx-auto flex sm:gap-x-[100px] gap-x-[40px] font-NexaLight text-[30px]'>

              <div className='flex sm:gap-x-2 xs:gap-x-[1px] hover:text-landingbackground text-white'>
                <p>Create Account</p>
                <span><ArrowUpRightIcon className='w-6 pt-3'/></span>
              </div>

              <div className='flex sm:gap-x-2 gap-x-1' >
                <p>Login</p>
                <span><ArrowUpRightIcon className='w-6 pt-3'/></span>
              </div>

            </div>

               



                

        </div>

        <hr className='opacity-20 my-12'/>

        <div className='sm:flex gap-28 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between sm:space-y-0 space-y-16'>


          <div className='space-y-3 text-white'>
            <img src={Logo} alt="" className='w-[200px] -mt-8'/>
            <div className='flex items-center gap-2'>
              <HiOutlineLocationMarker className='w-6 h-6'/>
              <p className='w-[273px]'>No 2C Ayo Rosiji Crescent, Ikeja GRA, Lagos.</p>
            </div>
            <div className='flex items-center gap-2'>
              <BiPhone className='w-6 h-6'/>
              <p>07002223556</p>
            </div>
            <div className='flex items-center gap-2'>
              <IoMailOutline className='w-6 h-6'/>
              <p>loans@accello.ng</p>
            </div>
          </div>


          <div className='space-y-6'>
            <p className='text-[#A7A7A7]'>Company:</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Faqs</p>
            <p>Contact Us</p>
          </div>

          <div className='space-y-6'>
            <p className='text-[#A7A7A7]'>Follow:</p>

            <div className='flex gap-x-4'>
              <Link to='https://facebook.com/accello.ngn' target="_blank" className='flex items-center gap-2'>
                <RiFacebookCircleLine className='w-6 h-6'/>
              </Link>

              <Link to='https://twitter.com/Accello_ng' target="_blank" className='flex items-center gap-2'>
                <FiTwitter className='w-6 h-6'/>
              </Link>

              <Link to='https://www.instagram.com/accello_ng/' target="_blank" className='flex items-center gap-2'>
                <FaInstagram className='w-6 h-6'/>
              </Link>

              <Link to='https://www.linkedin.com/company/accello-ng' target="_blank" className='flex items-center gap-2'>
                <RiLinkedinBoxLine className='w-6 h-6'/>
              </Link>

            </div>

          </div>


          <div className='space-y-6'>
            <p className='text-[#A7A7A7]'>Legal:</p>
            <div className='space-y-6'>
              <p>Terms and conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>

        </div>

        {/* <hr className='opacity-20 my-12'/> */}

        <div className='mx-auto text-center mt-16 -mb-14'>

          <p>© {new Date().getFullYear()} Accello Limited. All rights reserved</p>

        </div>


    </div>
  )
}

export default Footer