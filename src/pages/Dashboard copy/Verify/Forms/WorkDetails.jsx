import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextFieldInput } from '../../../../custom/FormInputs';

function WorkDetails() {
  return (
    <div>
            <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Work Details</p>
                <p>We would like to know where you work</p>
            </div>

            <div className=''>

                <div className='mx-auto my-10 grid md:grid-cols-2 grid-cols-1 gap-10' >



                    

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="employmentStatus">Employment Status</InputLabel>
                            <Select
                                labelId="Employment Status"
                                id="employmentStatus"
                                // value={age}
                                // onChange={handleChange}
                                label="State"
                                placeholder='Choose Status'
                            >
                                <MenuItem value='Single'>Single</MenuItem>
                                <MenuItem value='Married'>Married</MenuItem>
                                <MenuItem value='Divorced'>Divorced</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Company-Name">Company Name</InputLabel>
                            <Select
                                labelId="company"
                                id="company"
                                // value={age}
                                // onChange={handleChange}
                                label="company"
                                placeholder='Choose company'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Company-Name">State</InputLabel>
                            <Select
                                labelId="company"
                                id="company"
                                // value={age}
                                // onChange={handleChange}
                                label="company"
                                placeholder='Enter company state'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Company-Name">City</InputLabel>
                            <Select
                                labelId="company-city"
                                id="company-city"
                                // value={age}
                                // onChange={handleChange}
                                label="company city"
                                placeholder='Enter company city'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    
                </div>


                <div className='relative'>
                    <TextFieldInput idName='Company Address' labelName='Company Address' placeholderName='Enter company address' />
                </div>

            </div>

    </div>
  )
}

export default WorkDetails
