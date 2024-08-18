import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import TextField from '@mui/material/TextField';
import { CustomRangeSlider, ValueLabelComponent, marks } from '../../custom/CustomSlider';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';



// bg-gradient-to-r from-[#F1F7FF] to-[#FFE6FA]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function valuetext(value) {
  return `${value} Months`;
}

function Calculator({handleClickOpen}) {
  
  const [sliderValue, setsliderValue] = useState(5)
  const [amountInput, setamountInput] = useState(230000)
  const [fees] = useState(3.45)
  // const [fees, setfess] = useState(5)
  const [loanType, setloanType] = useState('Personal')

  useEffect(()=>{
    if (pass < 49999) {
      setamountInput(50000)
    }
  }, [amountInput])



  const monthlyRepayment = amountInput / sliderValue
  const totalRepayment = parseFloat(amountInput) + parseFloat(monthlyRepayment)

  function sliderValueAction(e) {
    const value = e.target.value
    setsliderValue(value)

  }




  let [categories] = useState({
    Personal: [
      {
        id: 1,
      },
    ],
  })

  

  return (
    <div className='p-4 bg-landingbackground' name='calculator'>
      <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center'>
        {/* <h1 className='font-gilroy text-[36px]'>Personal Loan Calculator</h1>
          <p className='text-[16px] text-[#4D4D4D]'>Apply for a personal loan in minutes. Ready to get started?.</p> */}
      </div>
      <div className='sm:flex gap-4 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between mt-8 sm:h-[600px]'>

        <div className='sm:max-w-[50%] mt-12 '>
          <h1 className='font-NexaBold lg:text-[36px] md:text-[28px] text-[22px] font-bold'>Personal Loan Calculator</h1>

          <p className='sm:w-[400px] text-[#4D4D4D]'>How much would you like to borrow?</p>

          <p className='sm:w-[400px] mt-12 mb-6 font-bold hidden'>Loan Type</p>

          <Tab.Group>
            <Tab.List className="hidden space-x-6 rounded-xl p-1">
              {Object.keys(categories).map((category, index) => (
                <Tab
                  key={index}
                  onClick={({ selected }) =>
                    selected
                      ? setloanType(selected)
                      : setloanType(category)
                  }
                  className={({ selected }) =>
                    classNames(
                      'rounded-lg sm:py-2.5 sm:px-3 sm:text-sm text-lg font-medium leading-5 py-5 px-6',
                      selected
                        ? 'bg-accelloBlue text-white shadow'
                        : 'bg-landingbackground text-black hover:bg-accelloBlue/[0.12]'
                    )
                  }

                >
                  {category}
                </Tab>

              ))}
            </Tab.List>
            <Tab.Panels className="mt-12">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'p-3 space-y-16',
                  )}
                >
                  <TextField
                    id="standard-basic"
                    key={idx}
                    label="Amount"
                    variant="standard"
                    type="number"
                    className='w-full'
                    defaultValue={amountInput}
                    onChange={e => setamountInput(e.target.value || 0)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          ₦
                        </InputAdornment>
                      ),
                    }}
                  />


                  <div>
                    <Typography gutterBottom>Loan Term</Typography>
                    <CustomRangeSlider
                      key={`self ${idx}`}
                      value={sliderValue}
                      label='Tenure'
                      valueLabelDisplay="auto"
                      slots={{
                        valueLabel: ValueLabelComponent,
                      }}
                      marks={marks}
                      getAriaValueText={valuetext}
                      min={3}
                      max={24}
                      onChange={sliderValueAction}
                    />
                  </div>

                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>


        </div>

        <div className='sm:max-w-[50%] mt-12 bg-white sm:w-[548px] rounded-[25px] sm:h-[470px]'>

          <div className='hidden justify-between py-[30px] px-[48px]'>
            <p className='text-[#4D4D4D]'>Loan Type</p>
            <p className='font-medium'>{loanType}</p>
          </div>

          <hr className='hidden mx-[48px]' />

          <div className='hidden justify-between py-[30px] px-[48px]'>
            <p className='text-[#4D4D4D]'>Tenure</p>
            <p className='font-medium'>{sliderValue} Months</p>
          </div>

          <hr className='hidden mx-[48px]' />

          <div className='flex justify-between py-[30px] px-[48px]'>
            <p className='text-[#4D4D4D]'>Loan Amount</p>
            <p className='font-medium'>₦ {parseFloat(amountInput).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00}</p>
          </div>

          <hr className='mx-[48px]' />

          <div className='flex justify-between py-[30px] px-[48px]'>
            <p className='text-[#4D4D4D]'>Fees</p>
            <p className='font-medium'>{fees}%</p>
          </div>

          <hr className='mx-[48px]' />

          <div className='flex justify-between py-[30px] px-[48px]'>
            <p className='text-[#4D4D4D]'>Monthly Payment</p>
            <p className='font-medium'>₦ {parseFloat(monthlyRepayment).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
          </div>

          <hr className='mx-[48px]' />

          <div className='flex justify-between py-[30px] px-[48px]'>
            <p className='text-[#4D4D4D]'>Total Payment</p>
            <p className='font-medium'>₦ {parseFloat(totalRepayment).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00}</p>
          </div>


          <div className='mx-auto max-w-7xl flex items-center'>
            <button type="button" className='border-2 border-white rounded-[8px] bg-accelloBlue py-3 px-16 text-white gap-2 mt-6 text-[16px] w-auto text-center items-center mx-auto mb-10 hover:bg-transparent hover:border-accelloBlue hover:text-accelloBlue' onClick={handleClickOpen}>Apply for Loan <span aria-hidden="true">→</span></button>
          </div>

        </div>




      </div>
      <hr className='mx-auto max-w-7xl my-24 sm:my-12' />

      
    </div>
  )
}

export default Calculator