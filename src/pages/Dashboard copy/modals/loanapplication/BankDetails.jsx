import React from 'react'
import { InputLabel,  MenuItem, Select, FormControl, TextField} from '@mui/material';


function BankDetails() {
  return (
    <div className='w-full'>
        <div className='w-full'>
            <p className='font-NexaBold text-xl'>Bank Details</p>
        </div>


        <div className='space-y-10 mt-10 w-full'>

            <div className='relative'>
                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth variant='standard'>
                    <InputLabel id="demo-select-small">Bank Name</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Age"
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>GT Bank</MenuItem>
                        <MenuItem value={20}>Access Bank</MenuItem>
                        <MenuItem value={30}>Fidelity Bank</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='relative'>
                <TextField 
                    fullWidth
                    variant='standard'
                    label='Account Number'

                />
                
                
            </div>

            <div className='relative'>
                <TextField 
                    fullWidth
                    variant='standard'
                    label='Account Name'

                />
                
                
            </div>

           

            <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Continue</button>

        </div>
    </div>
  )
}

export default BankDetails
