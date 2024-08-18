import React, { useEffect } from 'react'
import CustomDialog from '../../custom/CustomDialog';
import { useFormik } from 'formik';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';


import { loanApplication, loanApplicationValidation } from '../../helpers/loanApplication';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function LoanApplicationModal({ open, handleClose }) {

  
    const [successMssg, setSucccessMssg] = React.useState({ status: null, type: '', message: '' })


    const formik = useFormik(
        {
            initialValues: loanApplication,
            validationSchema: loanApplicationValidation,
            enableReinitialize: true,
            onSubmit: async (values) => {
                try {
                    const response = await axios.post(`https://bravewood.ng/profiles/apply-accello/`, values,
                    );
                    setSucccessMssg({ status: true, type: 'success', message: response.data.message })
                    formik.resetForm()
                    await sleep(5000)
                    setSucccessMssg({ status: null, type: '', message: '' })
                } catch (error) {
                    setSucccessMssg({ status: true, type: 'error', message: 'Something went wrong, Please check all input and try again.' })
                    await sleep(5000)
                    setSucccessMssg({ status: null, type: '', message: '' })
                }
            }
        }
    )

    useEffect(()=>{
        if (parseInt(formik.values.amount) < 50000) {
          formik.setFieldValue( "amount",50000)
        }
      }, [formik])


    return (
        <CustomDialog open={open} handleClose={handleClose}>
            <div className='lg:w-[600px] p-6'>
                <div className='flex justify-between items-center'>
                    <p className='font-extrabold text-xl'>Apply for loan</p>
                    <button className='hover:text-white hover:bg-accelloBlue p-2 rounded-xl h-10 w-10' onClick={handleClose}>x</button>
                </div>
                <hr className='my-4' />
                {successMssg.status &&
                    <p className={`${successMssg.type === 'error' ? 'bg-red-500' : 'bg-green-500'}  p-2 rounded-lg text-white text-center`} >{successMssg.message}</p>
                }

                <div>
                    <form action="" method='POST'>
                        <div className='my-8'>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="your-name" className="block text-sm font-bold leading-6 text-black">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        min={50000}
                                        placeholder='John Doe'
                                        autoComplete="given-name"
                                        className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.name && formik.touched.name &&
                                        <p className='text-xs text-red-700'>{formik.errors.name}</p>
                                    }
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-bold leading-6 text-black">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="Email-Address"
                                        placeholder='John@gmail.com'
                                        className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.email && formik.touched.email &&
                                        <p className='text-xs text-red-700'>{formik.errors.email}</p>
                                    }
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="phone" className="block text-sm font-bold leading-6 text-black">
                                        Phone number
                                    </label>
                                    <input
                                        type="phone"
                                        name="phone_number"
                                        id="phone_number"
                                        placeholder='08182939982'
                                        className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                        value={formik.values.phone_number}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.phone_number && formik.touched.phone_number &&
                                        <p className='text-xs text-red-700'>{formik.errors.phone_number}</p>
                                    }
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="title" className="block text-sm font-bold leading-6 text-black">
                                        Sector
                                    </label>
                                    <select name="sector" id="sector" className="mt-2 h-12 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" value={formik.values.sector}
                                        onChange={formik.handleChange}>
                                        <option value="" disabled>Select sector</option>
                                        <option value="Federal">Federal Worker</option>
                                        <option value="State">State Worker</option>
                                        <option value="State">Private Worker</option>
                                    </select>
                                    {formik.errors.sector && formik.touched.sector &&
                                        <p className='text-xs text-red-700'>{formik.errors.sector}</p>
                                    }
                                </div>




                            </div>
                            <div className='w-full my-4'>
                                <label htmlFor="amount" className="block text-sm font-bold leading-6 text-black">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    placeholder='Type amount'
                                    className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    value={formik.values.amount}
                                    onChange={formik.handleChange}
                                    inputMode='numeric'

                                />
                                {formik.errors.amount && formik.touched.amount &&
                                    <p className='text-xs text-red-700'>{formik.errors.amount}</p>
                                }
                            </div>

                            <div className="mt-8 w-full">
                                <button type="button" className="w-full border-2 border-white rounded-[8px] bg-accelloBlue py-3 px-20 text-white  gap-2 text-center items-center" onClick={formik.handleSubmit} disabled={formik.isSubmitting}>
                                    Submit
                                    {formik.isSubmitting &&
                                        <CircularProgress size={`small`} color='inherit' className="block h-3 w-3 ml-2 text-white" />
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>



            </div>
        </CustomDialog>
    )
}

export default LoanApplicationModal
