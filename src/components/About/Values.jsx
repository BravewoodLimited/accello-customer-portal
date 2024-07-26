import React from 'react'
import Rocket from '../../assets/Landing/rocket.png'
import Thunder from '../../assets/Landing/Difference/thunder.png'
import Trophy from '../../assets/Landing/Difference/cash.png'
import Tele from '../../assets/Landing/Difference/shield.png'
import User from '../../assets/Landing/Difference/web.png'

function Values() {
  return (
    <div className='p-4 text-black bg-[#F9F9FB]'>
        <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center'>
          <h1 className='font-gilroy text-[36px]'>Our Core Values</h1>
          {/* <p className='text-[16px] text-[#4D4D4D]'>Cum sociis natoque penatibus et magnis.</p> */}
        </div>


        <div className='sm:flex gap-4 flex-row mx-auto max-w-7xl sm:px-6 lg:px-8 sm:justify-between mt-8 items-center '>


                


                <div className='relative sm:max-w-[50%] mx-auto p-6 2xl:w-full md:w-1/2'>

                    
                    <img src={Rocket} alt="Accello Hero" className='2xl:w-2/4 mx-auto'/>
                    

                </div>



                <div className='sm:max-w-[50%] mx-auto sm:p-4  grid sm:grid-cols-2 sm:gap-x-[50px] md:gap-y-2 gap-y-8'>

                    <div className='bg-white p-8 h-auto w-auto rounded-[15px] sm:mb-10'>
                        <div>
                            <img src={Thunder} alt="" className='mb-2'/>
                            <h2 className='font-NexaBold font-extrabold mb-2 text-[20px]'>Dedication to Life</h2>
                        </div>
                    </div>

                    <div className='bg-white p-8 h-auto w-auto rounded-[15px] sm:mt-10'>
                        <div>
                            <img src={Trophy} alt="" className='mb-2'/>
                            <h2 className='font-NexaBold font-extrabold mb-2 text-[20px]'>Respect for Individual Dignity</h2>
                        </div>
                    </div>


                    <div className='bg-white p-8 h-auto w-auto rounded-[15px] sm:mb-10'>
                        <div>
                            <img src={Tele} alt="" className='mb-2'/>
                            <h2 className='font-NexaBold font-extrabold mb-2 text-[20px]'>Commitment to Community</h2>
                        </div>
                    </div>

                    <div className='bg-white p-8 h-auto w-auto rounded-[15px] sm:mt-10'>
                        <div>
                            <img src={User} alt="" className='mb-2'/>
                            <h2 className='font-NexaBold font-extrabold mb-2 text-[20px]'>Mutual Trust</h2>
                            {/* <p className='text-[#4D4D4D]'></p> */}
                        </div>
                    </div>




                    

                </div>

               



                

        </div>
        {/* <hr className='mx-auto max-w-7xl my-12'/> */}
    </div>
  )
}

export default Values