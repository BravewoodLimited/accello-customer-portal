import React from 'react'


import Thunder from '../../assets/Landing/Difference/thunder.png'
import Percentage from '../../assets/Landing/Difference/percentage.png'
import Diamond from '../../assets/Landing/Difference/diamond.png'
import Cash from '../../assets/Landing/Difference/cash.png'
import Shield from '../../assets/Landing/Difference/shield.png'
import WebGear from '../../assets/Landing/Difference/web.png'


const LoveAccello = [
    {img : Thunder,  h2: 'Fast Decision', p: 'Get your funds within a few hours.'},
    {img : Percentage, h2: 'Competitive Rates', p: 'Our rates are fair and competitive.'},
    {img : Diamond,  h2: 'Easy to Use', p: 'Apply for a loan with your phone - with zero stress!'},  
    {img : Cash,  h2: 'Affordable Repayments', p: 'Pay back in a way that fits your pocket.'},
    {img : Shield,  h2: 'Simple Process', p: 'No paperwork, no collateral, and no guarantors.'},
    {img : WebGear,  h2: 'Personalized', p: 'Our loan services are personalized to fit each individuals needs and goals.'},
]

function Difference() {
  return (
    <div name='Why' className='p-4 text-black bg-landingbackground'>
        <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-12'>
          <h1 className='font-NexaBold text-[36px]'>Why Our Customers Love Accello</h1>
          <p className='text-[16px] text-[#4D4D4D]'>We're 100% focused on helping thousands of individuals in both public and private sector reach their goals.</p>
        </div>


        <div className='2xl:max-w-[70%] md:max-w-[90%] sm:mx-auto mx-4 mt-14 grid sm:grid-cols-3 2xl:gap-x-[100px] md:gap-x-[30px] sm:gap-0'>

            {LoveAccello.map((item, i) => (
            <div key={i} className='bg-white p-8 2xl:w-[440px]  rounded-[15px] my-2'>
                <div className='text-center'>
                    <img src={item.img} alt="" className='mb-2 mx-auto'/>
                    <h2 className='font-NexaBold font-extrabold mb-2 text-[18px]'>{item.h2}</h2>
                    <p className='text-[#4D4D4D] font-light'>{item.p}</p>
                </div>
            </div>
            ))}




            

        </div>

               

    </div>
  )
}

export default Difference