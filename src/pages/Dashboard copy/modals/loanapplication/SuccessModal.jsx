import React from 'react'
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import Success from "../../../../assets/Login/success.png";

function SuccessModal({open, handleClose, name, key }) {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        key={key}
        >
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[600px] lg:h-auto w-full h-full p-8 rounded-lg font-NexaLight'>
            <div className=''>
              <div className='lg:flex lg:flex-row-reverse  justify-between '>
                    
                <button onClick={handleClose} className='font-extrabold'><AiOutlineClose/></button>
              </div>
            </div>

            <div className='space-y-10 mt-10 text-center mx-auto'>
              <img src={Success} alt="" className='max-w-auto mx-auto'/>

              <p className='font-NexaBold text-4xl'>Success</p>
              <p className='text-xl'>Your loan application was successful</p>


              <button className="w-[50%] h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Return Home</button>

            </div>
          </div>
    </Modal>
  )
}

export default SuccessModal
