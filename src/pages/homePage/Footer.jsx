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


        <div className=' lg:grid  flex flex-col items-center  lg:grid-cols-4  lg:gap-16   mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  sm:space-y-0 space-y-16'>


          <div className='space-y-3 text-white w-full'>
            <img src={Logo} alt="" className='w-[200px] -mt-16'/>
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


          <div className='lg:space-y-6 w-full '>
            <p className='text-[#A7A7A7]'>Company:</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Faqs</p>
            <p>Contact Us</p>
          </div>

          <div className='space-y-6 w-full '>
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


          <div className='space-y-6 w-full'>
            <p className='text-[#A7A7A7]'>Legal:</p>
            <div className='space-y-6'>
              <p>Terms and conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>

        </div>

        {/* <hr className='opacity-20 my-12'/> */}

        <div className='mx-auto text-center mt-16 -mb-14'>

          <p>© {new Date().getFullYear()} Accello Limited. All rights reserved-Powered by <span className='text-[#077DBB]'>Bravewood Finance Limited</span></p>

        </div>


    </div>
  )
}

export default Footer