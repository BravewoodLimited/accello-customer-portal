import React from 'react'
import { BiFile } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';
import { TextFieldInput, SelectField } from '../../../../custom/FormInputs';

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
function HomeAddress(props) {
    const {
        formField: {
            HState,
            HCity,
            HResidentialAddress,
        }
    } = props;
  return (
    <div>
            <div className='mt-8'>
                <p className='font-extrabold text-[30px]'>Home Address</p>
                <p>Kindly input your home address details.</p>
            </div>

            <div className=''>

                <div className='mx-auto my-20 grid md:grid-cols-2 grid-cols-1 gap-10' >



                    

                    <div className='relative'>
                        <SelectField data={cities} name={HState.name} label={HState.label}/>
                    </div>

                    

                    <div className='relative'>
                        <SelectField data={cities} name={HCity.name} label={HCity.label}/>
                    </div>

                    <div className='relative'>
                        <TextFieldInput name={HResidentialAddress.name} label={HResidentialAddress.label} />
                    </div>
                </div>

                <div className='relative -mt-8 mb-10 text-left'>
                    <IconButton color="primary" aria-label="upload picture" component="label"
                        sx={{ landingbackgroundColor: "transparent", right: "0px", borderRadius: "10px", width: "100%", height: "100%", padding: "6px", color: "black", border: '1px solid', '&:hover': { borderColor: '#D48305', border: '1px solid', color: "#000000" } }}
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

            </div>

    </div>
  )
}

export default HomeAddress
