import React from 'react'
import TextField from '@mui/material/TextField';
import {CustomRangeSlider, ValueLabelComponent, dashboardMarks} from '../../../../custom/CustomSlider';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';




function valuetext(value) {
    return `${value}`;
  }

function LoanDetails() {

    const [sliderValue, setsliderValue] = React.useState(5)
    const [amountInput, setamountInput] = React.useState(230000)

    const monthlyRepayment = amountInput/sliderValue
    const totalRepayment = parseFloat(amountInput) + parseFloat(monthlyRepayment)


    function sliderValueAction(e){
      const value = e.target.value
      setsliderValue(value)
    
    }


  return (
    <div className='w-full'>
        <div className='w-full'>
            <p className='font-NexaBold text-xl'>Loan Details</p>
        </div>


        <div className='space-y-10 mt-10 w-full'>

            <div className='relative'>
                <TextField 
                        id="standard-basic" 
                        label="Amount" 
                        variant="standard"
                        type="number"
                        className='w-full' 
                        defaultValue={amountInput} 
                        onChange={e => setamountInput(e.target.value || 0) }
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            ₦
                            </InputAdornment>
                        ),
                        }}
                />
                
            </div>

            <div className='relative'>
                <Typography  gutterBottom>Loan Term</Typography>
                <CustomRangeSlider
                value = {sliderValue}
                label='Tenure'
                valueLabelDisplay="auto"
                slots={{
                    valueLabel: ValueLabelComponent,
                }}
                marks={dashboardMarks}
                getAriaValueText={valuetext}
                min={3}
                max={12}
                onChange={sliderValueAction}
                />
                
            </div>

            <div className='border rounded-xl bg-[#04265F] bg-opacity-5'>
                <div className='p-4 flex justify-between'>

                    <div>
                        <p className='font-extrabold'>₦{monthlyRepayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        <p>Monthly Payment</p>
                    </div>

                    <div>
                        <p className='font-extrabold'>4.5%</p>
                        <p>Fees</p>
                    </div>

                    <div>
                        <p className='font-extrabold'>₦{totalRepayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        <p>Total Payment</p>
                    </div>

                </div>

            </div>

            <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Apply Now</button>

        </div>
    </div>
  )
}

export default LoanDetails
