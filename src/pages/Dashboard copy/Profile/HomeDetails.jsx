import React from 'react'
import { ProfileTextField, ProfileSelectField } from '../../../custom/FormInputs';
import { BiFile } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';

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


function HomeDetails() {
  return (
    <div className='bg-white lg:p-6 p-2 rounded-2xl mb-20 mt-10'>
            {/* <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Home Address</p>
                <p>Kindly input your home address details.</p>
            </div> */}

            <div className=''>

                <div className='mx-auto mt-10 mb-20 grid md:grid-cols-2 grid-cols-1 gap-10' >



                    

                    <div className='relative'>
                        <ProfileSelectField data={cities} label={`State`}/>
                    </div>

                    

                    <div className='relative'>
                        <ProfileSelectField data={cities} label={`City`}/>
                    </div>

                    <div className='relative'>
                        <ProfileTextField idName={`Residential Address`} labelName={`Residential Address`} />
                    </div>
                </div>

                <div className='relative -mt-8 mb-10 text-left'>
                    <IconButton color="primary" aria-label="upload picture" component="label"
                        sx={{ backgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
                    >
                        <input hidden accept="image/*" type="file" />
                        <div className='flex items-center gap-6'>
                            <BiFile />
                            <div className='text-left'>
                                <p className='text-base font-bold'>Upload Proof of Identity</p>
                                <p className='text-sm'>Int'l Passport, Driver's License, NIN Slip, PVC etc.</p>
                            </div>
                        </div>
                    </IconButton>
                </div>

                <div className='mb-10'>
                  <button className=" h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Save Changes</button>
                </div>

            </div>

    </div>
  )
}

export default HomeDetails
