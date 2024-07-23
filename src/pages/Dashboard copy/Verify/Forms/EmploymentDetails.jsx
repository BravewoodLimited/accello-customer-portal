import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePickerInput } from '../../../../custom/FormInputs';
import { BiFile } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { SalarySlider } from '../../../../custom/CustomSlider';
import Typography from '@mui/material/Typography';

function EmploymentDetails() {
  return (
    <div>
            <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Employment Details</p>
                <p>We would like to know more about your employment with GT Bank</p>
            </div>

            <div className=''>

                <div className='mx-auto mt-10 mb-20 grid md:grid-cols-2 grid-cols-1 gap-10' >



                    

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="employmentStatus">Employment Type</InputLabel>
                            <Select
                                labelId="Employment Status"
                                id="employmentStatus"
                                // value={age}
                                // onChange={handleChange}
                                label="State"
                                placeholder='Choose Employment Type'
                            >
                                <MenuItem value='Single'>Single</MenuItem>
                                <MenuItem value='Married'>Married</MenuItem>
                                <MenuItem value='Divorced'>Divorced</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    

                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Company-Name">Job Role</InputLabel>
                            <Select
                                labelId="company"
                                id="company"
                                // value={age}
                                // onChange={handleChange}
                                label="company"
                                placeholder='Choose Role'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='relative'>
                        <DatePickerInput 
                            label="Date Joined"
                        />
                    </div>

                    <div className='relative'>
                        <DatePickerInput 
                            inputProps={{
                                placeholder: "Placeholder"
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            label="Salary Date"

                        />
                    </div>


                    <div className='relative'>
                        <FormControl variant="standard" fullWidth >
                            <InputLabel id="Company-Name">City</InputLabel>
                            <Select
                                labelId="company"
                                id="company"
                                // value={age}
                                // onChange={handleChange}
                                label="company"
                                placeholder='Enter City'
                            >
                                <MenuItem value='Primary'>Primary</MenuItem>
                                <MenuItem value='Secondary'>Secondary</MenuItem>
                                <MenuItem value='Tertiary'>Tertiary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='relative space-y-4 md:mb-0 mb-10'>
                        <Typography gutterBottom>Salary</Typography>
                        <SalarySlider/>
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
                                <p className='text-base font-bold'>Upload Staff I.D Card</p>
                                <p className='text-sm'>Supported format Jpg, Jpeg, Png etc</p>
                            </div>
                        </div>
                    </IconButton>
                </div>


            </div>

    </div>
  )
}

export default EmploymentDetails