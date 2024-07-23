import React from 'react'
import { BiFile } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';

function DocumentUpload() {
  return (
    <div className='w-full'>
        <div className='w-full'>
            <p className='font-NexaBold text-xl'>Upload Documents</p>
        </div>


        <div className='space-y-8 mt-16 w-full'>

            <div className='relative -mt-8 mb-10 text-left'>
                <IconButton color="primary" aria-label="upload picture" component="label"
                    sx={{ backgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", justifyContent: "start", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
                >
                    <input hidden accept="image/*" type="file" />
                    <div className='flex items-center justify-start gap-6 ml-10 p-2'>
                        <div className='bg-background rounded-full w-10 h-10 flex items-center justify-center'>
                            <BiFile className=' '/>
                        </div>
                        <div className='text-left'>
                            <p className='text-base font-bold'>Employee ID Card</p>
                            <p className='text-sm'>ID Card issued by your employer</p>
                        </div>
                    </div>
                </IconButton>
            </div>

            <div className='relative -mt-8 mb-10 text-left'>
                <IconButton color="primary" aria-label="upload picture" component="label"
                    sx={{ backgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", justifyContent: "start", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
                >
                    <input hidden accept="image/*" type="file" />
                    <div className='flex items-center justify-start gap-6 ml-10 p-2'>
                        <div className='bg-background rounded-full w-10 h-10 flex items-center justify-center'>
                            <BiFile className=' '/>
                        </div>
                        <div className='text-left'>
                            <p className='text-base font-bold'>Pay Slip</p>
                            <p className='text-sm'>3 month recent pay slip</p>
                        </div>
                    </div>
                </IconButton>
            </div>

            <div className='relative -mt-8 mb-10 text-left'>
                <IconButton color="primary" aria-label="upload picture" component="label"
                    sx={{ backgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", justifyContent: "start", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
                >
                    <input hidden accept="image/*" type="file" />
                    <div className='flex items-center justify-start gap-6 ml-10 p-2'>
                        <div className='bg-background rounded-full w-10 h-10 flex items-center justify-center'>
                            <BiFile className=' '/>
                        </div>
                        <div className='text-left'>
                            <p className='text-base font-bold'>Bank Statement</p>
                            <p className='text-sm'>Not more than 6 months old</p>
                        </div>
                    </div>
                </IconButton>
            </div>

            <div className='relative -mt-8 mb-10 text-left'>
                <IconButton color="primary" aria-label="upload picture" component="label"
                    sx={{ backgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", justifyContent: "start", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
                >
                    <input hidden accept="image/*" type="file" />
                    <div className='flex items-center justify-start gap-6 ml-10 p-2'>
                        <div className='bg-background rounded-full w-10 h-10 flex items-center justify-center'>
                            <BiFile className=' '/>
                        </div>
                        <div className='text-left'>
                            <p className='text-base font-bold'>Employee Letter</p>
                            <p className='text-sm'>Not more than 6 months old</p>
                        </div>
                    </div>
                </IconButton>
            </div>


           

            <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Continue</button>

        </div>
    </div>
  )
}

export default DocumentUpload