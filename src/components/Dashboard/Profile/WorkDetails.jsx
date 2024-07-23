import React from 'react'
import { ProfileTextField, ProfileSelectField } from '../../../custom/FormInputs';


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

function WorkDetails() {
  return (
    <div className='bg-white lg:p-6 p-2 rounded-2xl mb-20 mt-10'>
            {/* <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Home Address</p>
                <p>Kindly input your home address details.</p>
            </div> */}

            <div className=''>

                <div className='mx-auto mt-10 mb-10 grid md:grid-cols-2 grid-cols-1 gap-12' >



                    

                    <div className='relative'>
                        <ProfileSelectField data={cities} label={`Employment Status`}/>
                    </div>

                    

                    <div className='relative'>
                        <ProfileSelectField data={cities} label={`Company Name`}/>
                    </div>

                    <div className='relative'>
                        <ProfileSelectField data={cities} label={`Local Government`}/>
                    </div>

                    <div className='relative'>
                        <ProfileSelectField data={cities} label={`State`}/>
                    </div>

                    
                </div>

                <div className='relative mb-10'>
                    <ProfileTextField idName={`Company Address`} labelName={`Company Address`} />
                </div>

                <div className='mb-10'>
                  <button className=" h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Save Changes</button>
                </div>

            </div>

    </div>
  )
}

export default WorkDetails