import React from 'react'
import Phone from '../../assets/Landing/phone.png'
import PlayStore from '../../assets/Landing/googleplay.png'
import AppStore from '../../assets/Landing/appstore.png'

function MobileApp() {
  return (
    // <div className='p-4 text-white bg-landingbackground lg:block mb-14'>
    <div className='hidden p-4 text-white bg-landingbackground mb-14'>


        <div className='gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between mt-8'>


            <div className="relative bg-accelloBlue sm:mx-[80px] -mx-4 sm:h-[415px] rounded-[30px] flex">


                <div className='absolute sm:bottom-0 sm:-top-[55px] -top-[100px] sm:left-[80px] left-1/2'>
                    <img src={Phone} alt="" className='relative -left-1/2 sm:left-0'/>
                </div>

                <div className='sm:mt-16 mt-[270px] space-y-4 sm:ml-[500px] sm:mr-10 ml-8 mr-8 sm:mb-0 mb-16'>
                    <h1 className='font-NexaBold sm:text-[40px] text-[32px]'>DOWNLOAD THE APP</h1>
                    <p className='text-justify'>Personalize, Manage and Control your transactions from your phone. Join thousands of satisfied customers already using Accello App to access quick and easy credits</p>

                    <div className='flex gap-8 justify-start mt-[200px] md:w-3/4'>
                        <div className='w-auto'>
                            <img src={PlayStore} alt="" />
                        </div>
                        <div className='w-auto'>
                            <img src={AppStore} alt="" />
                        </div>

                    </div>
                </div>




            </div>


        </div>

        {/* <hr className='mx-auto max-w-7xl my-16'/> */}
    </div>
  )
}

export default MobileApp