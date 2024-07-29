import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import axios from "axios";
import { useFormik } from 'formik';
import { contactData, contactValidation } from '../../helpers/contactData';
import CircularProgress from '@mui/material/CircularProgress';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function ContactForm() {
  const [successMssg, setSucccessMssg] = React.useState({status: null,  type: '', message: ''})

  const formik = useFormik(
    {
      initialValues: contactData,
      validationSchema: contactValidation,
      enableReinitialize: true,
      onSubmit: async (values) => {
        try {
          const response = await axios.post(`https://bravewood.ng/profiles/contact-accello/`, values,
          );
          setSucccessMssg({status: true,  type: 'success', message: response.data.message})
          formik.resetForm()
          await sleep(5000)
          setSucccessMssg({status: null,  type: '', message: ''})
        } catch (error) {
          setSucccessMssg({status: true,  type: 'error', message: error.response.data.message})
          await sleep(5000)
          setSucccessMssg({status: null,  type: '', message: ''})
        }
      }
    }
  )

  // const Logger = () => {
  //   React.useEffect(() => {
  //     console.group("Formik State");
  //     console.log("values", formik.values);
  //     console.log("errors", formik.errors);
  //     console.log("touched", formik.touched);
  //     console.log("isSubmitting", formik.isSubmitting);
  //     console.log("isValidating", formik.isValidating);
  //     console.log("submitCount", formik.submitCount);
  //     console.groupEnd();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [
  //     formik.values,
  //     formik.errors,
  //     formik.touched,
  //     formik.isSubmitting,
  //     formik.isValidating,
  //     formik.submitCount,
  //     formik.initialValues
  //   ]);
  //   return null;
  // };

  return (
    <div className='p-4 text-black bg-white' name="Faqs">
      <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-18'>
        <h1 className='font-NexaBold text-[36px]'>Contact Us</h1>
        <p className='text-center md:max-w-4xl mx-auto'>Get in touch with our team with any questions. <br />Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
      </div>


      <div className='gap-4 mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 justify-between mt-8 '>

        {successMssg.status &&
          <p className={`${successMssg.type === 'error' ? 'bg-red-500' : 'bg-green-500'} mx-3 sm:mx-6 w-[90%] sm:w-[95%] p-2 rounded-lg text-white text-center`} >{successMssg.message}</p>
        } 



        <form action="#" method="POST">

          {/* <Logger /> */}
          <div className="overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="your-name" className="block text-sm font-bold leading-6 text-black">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
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
                    autoComplete="Email-Address"
                    placeholder='081 8293 9982'
                    className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && formik.touched.phone &&
                    <p className='text-xs text-red-700'>{formik.errors.phone_number}</p>
                  }
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="title" className="block text-sm font-bold leading-6 text-black">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='Type Here'
                    className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    value={formik.values.title}
                    onChange={formik.handleChange}

                  />
                  {formik.errors.title && formik.touched.title &&
                    <p className='text-xs text-red-700'>{formik.errors.title}</p>
                  }
                </div>


              </div>
            </div>


            <div className='px-6'>
              <label htmlFor="about" className="block text-sm font-bold leading-6 text-black">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  placeholder="Type Here"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.errors.message && formik.touched.message &&
                  <p className='text-xs text-red-700'>{formik.errors.message}</p>
                }
              </div>
            </div>

            <div className=" px-4 py-3 text-left sm:px-6">
              <button type="button" className="inline-flex border-2 border-white rounded-[8px] bg-accelloBlue py-3 px-20 text-white  gap-2 text-center items-center" onClick={formik.handleSubmit} disabled={formik.isSubmitting}>
                Submit
                {formik.isSubmitting ?
                  <CircularProgress size={`small`} color='inherit' className="block h-3 w-3 text-white" />
                  :
                  <ArrowRightIcon className="block h-4 w-3" aria-hidden="true" />
                }
              </button>
            </div>

          </div>
        </form>



      </div>
    </div>
  )
}

export default ContactForm