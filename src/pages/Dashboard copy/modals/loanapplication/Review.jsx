import React from 'react'

function Review() {
  return (
    <div className='w-full'>
        <div className='w-full '>
            <p className='font-NexaBold text-xl'>Review </p>
        </div>


        <div className='space-y-8 my-10 w-full overflow-y-scroll h-[500px]'>
            <div>
                <p className='font-NexaBold'>Loan Details</p>
                <table class="table-auto w-full border mt-2">
                    <tbody>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Loan Amount</td>
                            <td className='p-2'>₦100,000.00</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Tenure</td>
                            <td className='p-2'>24 Months</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Fees</td>
                            <td className='p-2'>4.5%</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Monthly Payments</td>
                            <td className='p-2'>₦15,000.00</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Total Payments</td>
                            <td className='p-2'>₦150,000.00</td>
                        </tr><tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Start Date</td>
                            <td className='p-2'>18th Jan 2023</td>
                        </tr><tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>End Date</td>
                            <td className='p-2'>24th Jul 2023</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div>
                <p className='font-NexaBold'>Bank Details</p>
                <table class="table-auto w-full border mt-2">
                    <tbody>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Bank Name</td>
                            <td className='p-2'>GT Bank</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Account Number</td>
                            <td className='p-2'>01122334455</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Account Name</td>
                            <td className='p-2'>Emmanuel Odo</td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>

            <div>
                <p className='font-NexaBold'>Guarantor Details</p>
                <table class="table-auto w-full border mt-2">
                    <tbody>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Full Name</td>
                            <td className='p-2'>Gabriel Odo</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Email</td>
                            <td className='p-2'>emmanuelodo@gmail.com</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Phone Number</td>
                            <td className='p-2'>0802 022 1111</td>
                        </tr>
                        <tr className='even:bg-transparent odd:bg-background'>
                            <td className='p-2'>Address</td>
                            <td className='p-2'>1, Olayinka Street</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            


           


        </div>
        <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    </div>
  )
}

export default Review
