import React from 'react'
import ProfileImg from '../../../assets/Profile.png'
import { BiCamera } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';
import { ProfileTextField, ProfileDatePickerInput, TextFieldInputAdornment,  } from '../../../custom/FormInputs';
import { IoMailOutline } from "react-icons/io5";

import ChangePassword from '../modals/ChangePassword';

function PersonalDetails(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  

  return (
    <div className='bg-white lg:p-6 p-2 rounded-2xl mt-10'>
      <div className='flex mt-4 items-center gap-x-4'>
        <div className='relative'>
            <img src={ProfileImg} alt="" className='rounded-full' />

            <IconButton color="primary" aria-label="upload picture" component="label"
                sx={{ position: "absolute", bottom: "0px", backgroundColor: "#D48305", right: "0px", borderRadius: "100%", width: "25px", height: "25px", padding: "6px", color: "white", '&:hover': { backgroundColor: 'transparent', borderColor: '#D48305', border: '1px', color: "#D48305" } }}
            >
                <input hidden accept="image/*" type="file" />
                <BiCamera />
            </IconButton>

        </div>

        <div className='items-center'>
            <p className='text-lg font-extrabold'>Emmanuel Odo</p>
            <div className='flex items-center gap-2'>
                <IoMailOutline />
                <p>emmanuelodo@gmail.com</p>

            </div>

        </div>
      </div>

      <div className=''>

          <div className='mx-auto my-20 grid md:grid-cols-2 grid-cols-1 gap-10' >



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

              <div className='relative md:mt-4'>
                  <ProfileDatePickerInput name={`Date Of Birth`}
                      labelName={`Date Of Birth`} />
              </div>

              <div className='relative'>
                  <ProfileTextField inputName={`BVN`} labelName={`BVN`} />
              </div>

              <div className='flex gap-4 w-full md:w-auto'>
                <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Save Changes</button>
                
                <button className="w-full h-[48px] text-black bg-transparent hover:bg-accelloBlue hover:text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center border" onClick={handleOpen}>Change Password</button>
                  
              </div>

              <ChangePassword open={open} handleClose={handleClose}/>

              



          </div>

      </div>
    </div>
  )
}

export default PersonalDetails
