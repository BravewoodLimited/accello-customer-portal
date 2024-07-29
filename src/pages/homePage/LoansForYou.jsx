import React from 'react'
import Loan1 from '../../assets/Landing/Personal.png'
import Loan2 from '../../assets/Landing/Education.png'
import Loan3 from '../../assets/Landing/Business.png'



const LoanTypes = [
  { img: Loan1, h3: 'Quick Loan', p: 'Pay bills, manage unexpected expenses, cover gaps and major life purchases.' },
  { img: Loan2, h3: 'EduLoan', p: 'Afford the education you want for yourself and your children.' },
  { img: Loan3, h3: 'Bridge Loan', p: 'Loans to help you sustain and grow your business. We get you through a rough patch.' },
]

function LoansForYou() {
  return (
<<<<<<< HEAD
    <div name="Loans" className='p-4 text-black bg-background'>
=======
    <div name="Loans" className='p-4 text-black bg-landingbackground'>
>>>>>>> staging

        <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-10'>
          <h1 className='font-NexaBold text-[36px]'>Find Loans That Meet Your Needs</h1>
          <p className='text-[16px] text-[#4D4D4D]'>At Accello, we make it easier, and we take you many steps closer to reaching your goals with our simple lending solutions designed to meet your needs.</p>
        </div>

        <div className='sm:flex gap-4 flex-row mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 justify-between mt-8 sm:space-y-0 space-y-6 mb-10'>


<<<<<<< HEAD
            {LoanTypes.map((item, i) => (
                <div key={i+'frf'} className='relative sm:max-w-[33.333%] mx-auto bg-white p-4 rounded-[15px] border'>
=======
            {LoanTypes.map((item) => (
                <div className='relative sm:max-w-[33.333%] mx-auto bg-white p-4 rounded-[15px] border'>
>>>>>>> staging

                    <div className='2xl:w-[350px] 2xl:h-[210px] p-2'>
                      <img src={item.img} alt="Accello Hero" className='m-auto object-cover'/>
                    </div>
                    <div className='2xl:p-4 md:p-2 px-8 py-4'>
                      <h3 className='font-NexaBold-light text-[22px] font-700'>{item.h3}</h3>
                      <p className='text-[#4D4D4D] text-[16px]'>{item.p}</p>
                    </div>
                    
                </div>
            ))}
                    

               



                

        </div>
        {/* <div className='mx-auto max-w-7xl flex items-center'>
          <button type="button" className='hidden sm:block border-2 border-white rounded-md bg-accelloBlue py-3 px-20 text-white hover:text-white gap-2 mt-14 text-[16px] sm:w-auto w-[100%] mb-24 text-center items-center mx-auto'>Get a Loan Now<span aria-hidden="true">→</span></button>
        </div> */}

    </div>
  )
}

export default LoansForYou