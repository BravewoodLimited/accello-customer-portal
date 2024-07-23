import React from 'react'
import { ProfileTextField, TextFieldInputAdornment, ProfileSelectField } from '../../../custom/FormInputs';
import { IoMailOutline } from "react-icons/io5";


const cities = [
    {
      value: undefined,
      label: 'None'
    },
    {
      value: '1',
      label: 'New York'
    },
    {
      value: '2',
      label: 'Chicago'
    },
    {
      value: '3',
      label: 'Saigon'
    }
  ];

function NextOfKin() {
  return (
    <div className='bg-white lg:p-6 p-2 rounded-2xl mt-10'>
    <div className='flex mt-4 items-center gap-x-4'>
      <div className='relative'>
          <p className='p-4 text-[24px] rounded-full text-white bg-[#D48305]'>G O</p>

      </div>

      <div className='items-center'>
          <p className='text-lg font-extrabold'>Gabriel Odo</p>
          <div className='flex items-center gap-2 opacity-40'>
              <IoMailOutline />
              <p>Gabrielodo@gmail.com</p>

          </div>

      </div>
    </div>

    <div className=''>

        <div className='mx-auto my-10 grid md:grid-cols-2 grid-cols-1 gap-10' >



            <div className='relative'>
                <ProfileTextField inputName={`First Name`} labelName={`First Name`} />
            </div>

            <div className='relative'>
                <ProfileTextField inputName={`Last Name`} labelName={`Last Name`} />
            </div>


            <div className='relative'>
                {/* <TextFieldInputAdornment idName='Email-Adress' labelName='Email Address' placeholderName='Enter Email Address' startIcon={<IoMailOutline />} /> */}
                <TextFieldInputAdornment 
                  idName='email'
                  inputName='email'
                  labelName='Email Address'
                  placeholderName='Enter Email Address'
                  startIcon={<IoMailOutline />}
                />
            </div>


            <div className='relative'>

                <ProfileTextField inputName={`Phone Number`}
                    labelName={`Phone Number`} />
            </div>

            <div className='relative '>
                <ProfileSelectField data={cities} label={`Relationship`} />
            </div>

            <div className='relative'>
                <ProfileTextField inputName={`Address`} labelName={`Address`} />
            </div>

            <div className='relative '>
                <ProfileSelectField data={cities} label={`Local Government`} />
            </div>

            <div className='relative'>
                <ProfileSelectField data={cities} label={`State`} />
            </div>


            <div className='flex gap-4 md:w-auto'>
              <button className="h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Save Changes</button>
              
                
            </div>



        </div>

    </div>
  </div>
  )
}

export default NextOfKin