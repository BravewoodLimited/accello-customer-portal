import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CiLock } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { TextFieldInputAdornment,  } from '../../../custom/FormInputs';


function ChangePassword({open, handleClose }) {

    const [showPassword, setShowPassword] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[600px] lg:h-auto w-full h-full p-8 rounded-lg font-NexaLight'>
                  <div className=''>
                    <div className='lg:flex lg:flex-row-reverse  justify-between '>
                      <button onClick={handleClose} className='font-extrabold'><AiOutlineClose/></button>
                      <p className='text-2xl font-extrabold mt-5'>Change Password</p>
                    </div>

                    <p className='text-sm'>Enter your new password below</p>
                  </div>

                  <div className='space-y-10 mt-10'>

                    <div className='relative'>
                      <TextFieldInputAdornment
                        idName='password'
                        labelName='Old Password'
                        placeholderName='Enter Password'
                        startIcon={<CiLock />}
                        inputType={showPassword ? 'text' : 'password'}
                        endIcon={<IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>}
                        name="password"
                      />
                      
                    </div>

                    <div className='relative'>
                      <TextFieldInputAdornment
                        idName='password'
                        labelName='New Password'
                        placeholderName='Enter Password'
                        startIcon={<CiLock />}
                        inputType={showPassword ? 'text' : 'password'}
                        endIcon={<IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>}
                        name="password"
                      />
                      
                    </div>

                    <div className='relative'>
                      <TextFieldInputAdornment
                        idName='password'
                        labelName='Confirm Password'
                        placeholderName='Enter Password'
                        startIcon={<CiLock />}
                        inputType={showPassword ? 'text' : 'password'}
                        endIcon={<IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>}
                        name="password"
                      />
                      
                    </div>

                    <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Save Changes</button>

                  </div>
                </div>
              </Modal>
  )
}

export default ChangePassword