import React from 'react'
import HeroImg from '../../assets/Landing/Device.png'
// import HeroImg2 from '../../assets/Landing/DeviceMobile.png'
import Star1 from '../../assets/Landing/Star1.png'
import Star2 from '../../assets/Landing/Star2.png'
import Star3 from '../../assets/Landing/Star3.png'
// import {ArrowRightIcon} from '@heroicons/react/24/outline'

import { Link as DomLink } from 'react-router-dom';
import { SIGNIN } from 'constants/urls';

function Hero() {

  const handleClickOpen = () => {
};
  return (
    <div className='p-4 text-white'>
        <div className='sm:flex gap-4 flex-row mx-auto 2xl:max-w-7xl max-w-6xl px-2 sm:px-6 lg:px-8 justify-between mt-8'>

            <img src={Star1} alt="" className='hidden animate-pulse sm:block h-6 absolute left-[40%]'/>
            <img src={Star3} alt="" className='hidden animate-pulse sm:block h-6 absolute left-[48%] top-[50%]'/>
            <img src={Star2} alt="" className='hidden animate-pulse sm:block h-6 absolute left-[34%] top-[80%]'/>



            <div className='sm:max-w-[50%] mt-12'>
              <h1 className='font-NexaBold lg:text-[64px] md:text-[48px] text-[36px] font-bold text-center xl:text-left'>Fast & Easy Personal Loans</h1>


              <p className='sm:w-[400px] mt-10 xl:mt-0'>Access quick unsecured loans that suit your unique profile and help you achieve your financial goals.</p>


              <button type="button" className='border-2 border-white rounded-md bg-white py-3 sm:px-10 text-black gap-2 xl:mt-14 mt-36 text-[16px] sm:w-auto w-[100%] mb-24 text-center items-center hover:bg-transparent hover:text-white' onClick={handleClickOpen}>Get a Loan Now <span aria-hidden="true">→</span></button>
            </div>


            <div className='sm:max-w-[50%]'>
              <img src={HeroImg} alt="Accello Hero" className='hidden md:block mt-10 2xl:max-w-[800px]' />
              {/* <img src={HeroImg2} alt="Accello Hero" className='md:hidden  mx-auto -mt-8 mb-24' /> */}
            </div>

        </div>

        
    </div>
  )
}

export default Hero