import React from 'react'
import ProfileImg from '../../../../assets/Profile.png'
import { BiCamera } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';
import { TextFieldInput, DatePickerInput, SelectField, PhoneFieldInput } from '../../../../custom/FormInputs';
import { IoMailOutline } from "react-icons/io5";
import { BiFile } from "react-icons/bi";

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






function PDetails(props) {

    const {
        formField: {
            PFirstName,
            PLastName,
            PEmail,
            PPhoneNumber,
            PDateOfBirth,
            PBVN,
            PMaritalStatus,
            PDependant,
            PEducationLevel,
            // PProofOfIdentity,
        }
    } = props;
    return (
        <div>
            <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Personal Details</p>
                <p>Kindly input your personal details.</p>
            </div>

            <div className='flex mt-10 items-center gap-x-4'>
                <div className='relative'>
                    <img src={ProfileImg} alt="" className='rounded-full' />

                    <IconButton color="primary" aria-label="upload picture" component="label"
                        sx={{ position: "absolute", bottom: "0px", landingbackgroundColor: "#D48305", right: "0px", borderRadius: "100%", width: "25px", height: "25px", padding: "6px", color: "white", '&:hover': { landingbackgroundColor: 'transparent', borderColor: '#D48305', border: '1px', color: "#D48305" } }}
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
                        <TextFieldInput name={PFirstName.name} label={PFirstName.label} />
                    </div>

                    <div className='relative'>
                        <TextFieldInput name={PLastName.name} label={PLastName.label} />
                    </div>


                    <div className='relative'>
                        {/* <TextFieldInputAdornment idName='Email-Adress' labelName='Email Address' placeholderName='Enter Email Address' startIcon={<IoMailOutline />} /> */}
                        <TextFieldInput name={PEmail.name} label={PEmail.label} />
                    </div>


                    <div className='relative'>

                        <PhoneFieldInput name={PPhoneNumber.name}
                            label={PPhoneNumber.label} />
                    </div>

                    <div className='relative md:mt-4'>
                        <DatePickerInput name={PDateOfBirth.name}
                            label={PDateOfBirth.label} />
                    </div>

                    <div className='relative'>
                        <TextFieldInput name={PBVN.name} label={PBVN.label} />
                    </div>

                    <div className='relative'>
                        <SelectField data={cities} name={PMaritalStatus.name} label={PMaritalStatus.label}/>
                    </div>

                    <div className='relative'>
                        <TextFieldInput name={PDependant.name} label={PDependant.label} />
                    </div>

                    <div className='relative'>
                        <SelectField data={cities} name={PEducationLevel.name} label={PEducationLevel.label}/>

                        {/* <FormControl variant="standard" fullWidth >
                            <InputLabel id="Marital-Status">Education Level</InputLabel>
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
                        </FormControl> */}

                    </div>

                    <div className='relative'>
                        <IconButton color="primary" aria-label="upload picture" component="label"
                            sx={{ landingbackgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
                        >
                            <input hidden accept="image/*" type="file"  />
                            <div className='flex items-center gap-6'>
                                <BiFile />
                                <div className='text-left'>
                                    <p className='text-base font-bold'>Upload Proof of Identity</p>
                                    <p className='text-sm'>Int'l Passport, Driver's License, NIN Slip, PVC etc.</p>
                                </div>
                            </div>
                        </IconButton>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default PDetails
