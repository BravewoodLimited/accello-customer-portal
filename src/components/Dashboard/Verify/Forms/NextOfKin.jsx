import React from 'react'
import { TextFieldInput, TextFieldInputAdornment } from '../../../../custom/FormInputs';
import MuiPhoneNumber from 'mui-phone-number';
import { IoMailOutline } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function NextOfKin() {
  return (
    <div>
            <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Next of Kin</p>
                <p>Kindly provide the details of your next of kin.</p>
            </div>

            <div className=''>

                <div className='mx-auto mb-20 mt-10 grid md:grid-cols-2 grid-cols-1 gap-10' >



                    <div className='relative'>
                        <TextFieldInput idName='First-Name' labelName='First Name' placeholderName='Enter First name' />
                    </div>

                    <div className='relative'>
                        <TextFieldInput idName='Last-Name' labelName='Last Name' placeholderName='Enter last name' />
                    </div>


                    <div className='relative'>
                        <TextFieldInputAdornment idName='Email-Adress' labelName='Email Address' placeholderName='Enter Email Address' startIcon={<IoMailOutline />} />
                    </div>


                    <div className='relative'>

                        <MuiPhoneNumber defaultCountry={'ng'} fullWidth label='Phone Number' />
                    </div>

                    

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Marital-Status">Relationship</InputLabel>
                            <Select
                                labelId="Marital-Status"
                                id="Marital-Status"
                                // value={age}
                                // onChange={handleChange}
                                label="Age"
                                placeholder='Choose one'
                            >
                                <MenuItem value='Single'>Single</MenuItem>
                                <MenuItem value='Married'>Married</MenuItem>
                                <MenuItem value='Divorced'>Divorced</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Marital-Status">State</InputLabel>
                            <Select
                                labelId="Education-level"
                                id="Education-level"
                                // value={age}
                                // onChange={handleChange}
                                label="Education Level"
                                placeholder='Choose Level'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Marital-Status">Local Government</InputLabel>
                            <Select
                                labelId="Education-level"
                                id="Education-level"
                                // value={age}
                                // onChange={handleChange}
                                label="Education Level"
                                placeholder='Choose Level'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='relative'>
                        <TextFieldInput idName='address' labelName='Address' placeholderName='Enter Address of Next of Kin' />
                    </div>



                </div>

            </div>

        </div>
  )
}

export default NextOfKin
