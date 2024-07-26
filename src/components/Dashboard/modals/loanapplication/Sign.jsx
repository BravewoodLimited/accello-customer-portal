import React from 'react'
import { TbFaceId, TbKeyboard } from "react-icons/tb";
import { FiPenTool } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import SuccessModal from './SuccessModal';





function Sign() {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  const handleOpenSuccessModal  = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  return (
    <div>
        <div className='w-full '>
            <p className='font-NexaBold text-xl'>Sign & Authenticate </p>
        </div>
       <div className='my-10'>
            <div className='flex gap-4 items-start'>
                <div className='p-2 bg-[#D48305] rounded-full'>
                    <TbFaceId className='h-10 w-10' color='#FFFFFF'/>
                </div>
                

                <div>
                  <p className='text-xl font-extrabold'>Facial Authentication</p>
                  <p>We need to verify that you're the one applying for loan.</p>
                  <button className='px-2 py-1 border-2 rounded-lg mt-4 font-bold'>Open Camera</button>
                </div>

            </div>

            <div className='mt-12'>
              <p className='font-extrabold'>Insert your signature</p>

              <div className='bg-landingbackground rounded-xl p-6'>

                <div className='flex justify-evenly bg-white px-4 py-2 rounded-xl'>
                  <div className='text-center'>
                    <TbKeyboard className='w-6 h-6 mx-auto'/>
                    <p className='font-bold'>Type</p>
                  </div>

                  <div className='text-center'>
                    <FiPenTool className='w-6 h-6 mx-auto'/>
                    <p className='font-bold'>Draw</p>
                  </div>

                  <div className='text-center'>
                    <IoImageOutline className='w-6 h-6 mx-auto' />
                    <p className='font-bold'>Image</p>
                  </div>

                </div>

                <div className='mt-24 mb-8 border-b border-black'></div>

              </div>
            </div>

            <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center mt-8" onClick={handleOpenSuccessModal}>Apply for loan</button>

            <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal}/>
       </div>
    </div>
  )
}

export default Sign