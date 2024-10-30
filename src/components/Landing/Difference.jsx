import React from 'react'


import Thunder from '../../assets/Landing/Difference/thunder.svg'
import Percentage from '../../assets/Landing/Difference/percentage.png'
import Diamond from '../../assets/Landing/Difference/diamond.png'
import Cash from '../../assets/Landing/Difference/cash.svg'
import Shield from '../../assets/Landing/Difference/shield.svg'
import WebGear from '../../assets/Landing/Difference/web.svg'


const LoveAccello = [
    {img : Thunder,  h2: 'Fast Decision', p: 'Same-day decision, funds sent within hours.'},
    {img : Percentage, h2: 'Competitive Rates', p: 'Fixed low rates.'},
    {img : Diamond,  h2: 'Experience Ease', p: 'Get the money you need from the comfort of your home.'},  
    {img : Cash,  h2: 'Affordable Repayments', p: 'Benefit from a manageable repayment plan that fits your budget.'},
    {img : Shield,  h2: 'Swift and Easy', p: 'No paperwork, no collateral, and no guarantors.'},
    {img : WebGear,  h2: 'Technology Driven', p: 'Easy to use, state-of-the-art technology allowing you to complete the entire process online.'},
]

function Difference() {
  return (
    <div name='Why' className='p-4 text-black bg-landingbackground'>
        <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-12'>
          <h1 className='font-NexaBold text-[36px]'>Why You'll Love Accello</h1>
          <p className='text-[16px] text-[#4D4D4D]'>We're 100% focused on helping thousands of individuals in both public and private sector reach their goals.</p>
        </div>


        <div className='2xl:max-w-[70%] md:max-w-[90%] sm:mx-auto mx-4 mt-14 grid sm:grid-cols-3 2xl:gap-x-[100px] md:gap-x-[30px] sm:gap-0'>

            {LoveAccello.map((item) => (
            <div className='bg-white p-8 2xl:w-[440px]  rounded-[15px] my-2'>
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