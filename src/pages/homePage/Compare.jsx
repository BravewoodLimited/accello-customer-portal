import React from 'react'
import MissionLogo from '../../assets/Landing/Mission.png'
import VisionLogo from '../../assets/Landing/Vision.png'
// import CoreLogo from '../../assets/Landing/Core.png'

const Special = [
    { img: MissionLogo, h3: 'Our Mission', p: 'To build a community of free and financially empowered people', class: 'ml-6 sm:ml-2' },
    { img: VisionLogo, h3: 'Our Vision', p: 'To simplify access to access of financial services through easy-to-use financial technology', class: 'ml-6 sm:ml-2' },
  ]



function Compare() {
  return (
    <div className='p-4 text-black bg-background mb-16 '>
        <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center'>
          {/* <h1 className='font-NexaBold text-[36px]'>What Makes Us Special</h1>
          <p className='text-[16px] text-[#4D4D4D]'>Discover what makes us special</p> */}
        </div>

        <div className='gap-4 mx-auto max-w-7xl sm:px-6 lg:px-6 justify-between mt-8'>

            <div className='sm:flex gap-4 gap-x-[50px] flex-row mx-auto max-w-7xl justify-between mt-8 sm:space-y-0 space-y-6'>


            {Special.map((item) => (
                <div className='relative sm:w-1/2 mx-auto bg-white p-4 rounded-[15px] shadow-difference'>
                    <img src={item.img} alt="" className={item.class}/>
                    <div className='sm:p-2 px-6 py-2'>
                        <h3 className='font-NexaBold text-[22px] font-700'>{item.h3}</h3>
                        <p className='text-[#4D4D4D] text-[16px]'>{item.p}</p>
                    </div>
                    
                </div>
            ))}

            {/* <div className='relative sm:w-1/3 mx-auto bg-white p-4 rounded-[15px] shadow-difference'>
                <img src={CoreLogo} alt="" className='w-12 ml-6 sm:ml-2'/>
                <div className='sm:p-2 px-6 py-2'>
                    <h3 className='font-NexaBold text-[22px] font-700'>Core Values</h3>
                    <p className='text-[#4D4D4D]  text-justify'>
                            <ol className="list-decimal ml-6">
                                <li>Dedication To Life</li>
                                <li>Respect For Individual Dignity</li>
                                <li>Commitment To Community</li>
                                <li>Mutual Trust</li>
                            </ol>
                        </p>
                </div>
                
            </div> */}
        

   



    

</div>


            {/* <div className="relative sm:flex flex-row justify-between space-y-[40px] sm:space-y-0 gap-4">

                <div className='bg-[#ECEEF3] rounded-[15px]'>

                    <div className='relative p-8'>
                        <img src={MissionLogo} alt="" className='w-10'/>
                        <h1 className='text-3xl font-NexaBold pt-3 pb-8'>Our Mission</h1>
                        <p className='text-justify'>Build a community of free and financially empowered people</p>

                    </div>

                </div>

                <div className='bg-[#F7F3EE] rounded-[15px]'>

                    <div className='relative p-8'>
                        <h1 className='text-3xl font-NexaBold pt-3 pb-8'>Our Vision</h1>
                        <p className='text-justify h-[200px]'>To simplify access to access of financial services through easy-to-use financial technology</p>

                        <div className='flex justify-end mt-8'>
                            <img src={VisionLogo} alt="" className='w-[150px] sm:w-auto'/>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            <div className='bg-[#ECEEF3] rounded-[15px] mt-[40px]'>
                <div className='sm:flex py-10 px-8 sm:gap-x-[200px]'>
                    <div className='sm:w-2/3'>
                        <h1 className='text-3xl font-NexaBold pt-3 pb-8'>Core Values</h1>
                        <p className='text-justify'>
                            <ol className="list-decimal ml-6">
                                <li>Dedication To Life</li>
                                <li>Respect For Individual Dignity</li>
                                <li>Commitment To Community</li>
                                <li>Mutual Trust</li>
                            </ol>
                        </p>
                    </div>

                    <div className='flex justify-end'>
                        <img src={CoreLogo} alt="" className='w-[150px] sm:w-auto' />
                    </div>
                </div>
            </div> */}


        </div>
    </div>
  )
}

export default Compare