import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {CustomRangeSlider, ValueLabelComponent, dashboardMarks} from '../../../custom/CustomSlider';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';




function valuetext(value) {
    return `${value}`;
}



function CalculateLoan({open, handleClose, name, key }) {
  

    const [sliderValue, setsliderValue] = React.useState(5)
    const [amountInput, setamountInput] = React.useState(230000)

    const monthlyRepayment = amountInput/sliderValue
    const totalRepayment = parseFloat(amountInput) + parseFloat(monthlyRepayment)


    function sliderValueAction(e){
      const value = e.target.value
      setsliderValue(value)
    
    }
  return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          key={key}
        >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[600px] lg:h-auto w-full h-full p-8 rounded-lg font-NexaLight'>
                  <div className=''>
                    <div className='lg:flex lg:flex-row-reverse  justify-between '>
                         
                      <button onClick={handleClose} className='font-extrabold'><AiOutlineClose/></button>
                      <p className='text-2xl font-extrabold'>Calculate {name} {key}</p>
                    </div>
                  </div>

                  <div className='space-y-10 mt-10'>

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

                    <div className='border rounded-xl'>
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
        </Modal>
  )
}

export default CalculateLoan


