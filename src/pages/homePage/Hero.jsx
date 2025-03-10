import React from 'react'
import HeroImg from '../../assets/Landing/Device.png'
// import HeroImg2 from '../../assets/Landing/DeviceMobile.png'
import Star1 from '../../assets/Landing/newstar1.png'
import Star2 from '../../assets/Landing/newstar2.png'
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

            <img src={Star1} alt="" className='hidden animate-pulse sm:block h-6 absolute left-[45%]'/>
            <img src={Star2} alt="" className='hidden animate-pulse sm:block h-6 absolute left-[40%] top-[65%]'/>
           



            <div className='sm:max-w-[50%] w-full mt-12 mx-auto flex flex-col items-center lg:items-start'>
              <h1 className='nexaBold lg:text-[60px] md:text-[48px] text-[36px] font-bold text-center   leading-[59px] xl:text-left'>Stress Free, Compassionate Loans</h1>


              <p className='sm:max-w-[400px] w-full  mt-10 xl:mt-4 font-dmsans font-normal lg:text-start text-center'>Get quick loans without collateral to meet your personal needs and help you reach your financial goals.</p>
              <img src={HeroImg} alt="Accello Hero" className='block lg:hidden mt-10 2xl:max-w-[800px]' />
              <DomLink to={SIGNIN} >
              <button type="button" className='border-2 border-white rounded-md bg-white py-3 sm:px-10 text-accelloBlue font-dmsans text-base mx-auto   gap-2 xl:mt-14 mt-36 text-[16px] sm:w-auto w-[100%] mb-20 p-4 text-center items-center  mx-autohover:bg-transparent hover:text-white' onClick={handleClickOpen}>Get a Loan Today</button></DomLink>
            </div>


            <div className='sm:max-w-[50%]'>
              <img src={HeroImg} alt="Accello Hero" className='hidden lg:block mt-10 2xl:max-w-[800px]' />
              {/* <img src={HeroImg2} alt="Accello Hero" className='md:hidden  mx-auto -mt-8 mb-24' /> */}
            </div>

        </div>

        
    </div>
  )
}

export default Hero