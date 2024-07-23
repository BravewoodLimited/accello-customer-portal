import React from 'react'
import PersonalLoanImage from '../../../assets/Dashboard/personal_loan.png'
import EducationLoanImage from '../../../assets/Dashboard/education_loan.png'
import BusinessLoanImage from '../../../assets/Dashboard/business_loan.png'


const AccelloLoan = [
    {img: PersonalLoanImage, h1: 'Personal Loan', p: '500,000', fees: '2.5', limit: '50,000'},
    {img: EducationLoanImage, h1: 'Education Loan', p: '500,000', fees: '2.5', limit: '50,000'},
    {img: BusinessLoanImage, h1: 'Business Loan', p: '500,000', fees: '2.5', limit: '50,000'},
    {img: BusinessLoanImage, h1: 'Business Loan', p: '500,000', fees: '2.5', limit: '50,000'},
    {img: BusinessLoanImage, h1: 'Business Loan', p: '500,000', fees: '2.5', limit: '50,000'},
    {img: BusinessLoanImage, h1: 'Business Loan', p: '500,000', fees: '2.5', limit: '50,000'},
]
  
function LoanHistory() {
  return (
    <div className='w-full'>

        <div className='flex flex-nowrap w-full 2xl:gap-x-[30px] md:gap-x-[30px] sm:gap-0 overflow-x-auto'>
        {AccelloLoan.map((item) => (
              <div className='bg-white p-8 min-w-[360px] rounded-[15px] xs:my-2 my-6'>
                  <div className='text-left'>
                      <img src={item.img} alt="" className='mb-2'/>
                      <div className='flex items-center justify-between'>
                        <h2 className='font-NexaBold font-extrabold text-[18px]'>{item.h1}</h2>
                        <p className='font-extrabold'>₦ {item.p}</p>
                      </div>
                      <hr className='my-4'/>

                      <div className='flex justify-between mt-6'>

                            <div className='space-y-6'>
                              <div>
                                <p className='text-sm'>Total Payment</p>
                                <p className='font-bold'>₦ {item.p}</p>
                              </div>
                              <div>
                                <p className='text-sm'>Fees</p>
                                <p className='font-bold'>{item.fees}%</p>
                              </div>
                            </div>

                            <div className='space-y-6 text-right'>
                              <div>
                                <p className='text-sm'>Tenure</p>
                                <p className='font-bold'>3 yrs</p>
                              </div>
                              <div>
                                <p className='text-sm'>Monthly Installments</p>
                                <p className='font-bold'>₦41,667.00</p>
                              </div>
                            </div>

                          </div>

                      <div className='flex flex-col mt-14'>
                        <button className='border rounded-md my-2 py-1.5 hover:border-accelloBlue hover:bg-accelloBlue hover:text-white'>Completed on 12th Dec, 2022</button>
                      </div>
                  </div>
              </div>
              ))} 
        </div>

        <div className='my-10'>
            <h1 className='text-2xl font-NexaBold'>Payment History</h1>
        </div>

        <div class="relative overflow-x-auto mb-10 bg-white">
            <table class="w-full text-sm text-left text-gray-500 p-4">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Loan Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Amount Due
                        </th>
                        <th scope="col" class="px-6 py-3">
                            % Completion
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Installment
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            24th Dec 2022
                        </th>
                        <td class="px-6 py-4">
                            Personal Loan
                        </td>
                        <td class="px-6 py-4">
                            41,667.00
                        </td>
                        <td class="px-6 py-4">
                            70%
                        </td>
                        <td class="px-6 py-4">
                            8/10
                        </td>
                        <td class="px-6 py-4">
                            <p className='border-2 py-1 px-2 rounded-xl'>Unpaid</p>
                        </td>
                    </tr>

                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            24th Dec 2022
                        </th>
                        <td class="px-6 py-4">
                            Personal Loan
                        </td>
                        <td class="px-6 py-4">
                            41,667.00
                        </td>
                        <td class="px-6 py-4">
                            70%
                        </td>
                        <td class="px-6 py-4">
                            8/10
                        </td>
                        <td class="px-6 py-4">
                            <p className='border-2 py-1 px-2 rounded-xl'>Unpaid</p>
                        </td>
                    </tr>

                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            24th Dec 2022
                        </th>
                        <td class="px-6 py-4">
                            Personal Loan
                        </td>
                        <td class="px-6 py-4">
                            41,667.00
                        </td>
                        <td class="px-6 py-4">
                            70%
                        </td>
                        <td class="px-6 py-4">
                            8/10
                        </td>
                        <td class="px-6 py-4">
                            <p className='border-2 py-1 px-2 rounded-xl'>Unpaid</p>
                        </td>
                    </tr>

                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            24th Dec 2022
                        </th>
                        <td class="px-6 py-4">
                            Personal Loan
                        </td>
                        <td class="px-6 py-4">
                            41,667.00
                        </td>
                        <td class="px-6 py-4">
                            70%
                        </td>
                        <td class="px-6 py-4">
                            8/10
                        </td>
                        <td class="px-6 py-4">
                            <p className='border-2 py-1 px-2 rounded-xl'>Unpaid</p>
                        </td>
                    </tr>

                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            24th Dec 2022
                        </th>
                        <td class="px-6 py-4">
                            Personal Loan
                        </td>
                        <td class="px-6 py-4">
                            41,667.00
                        </td>
                        <td class="px-6 py-4">
                            70%
                        </td>
                        <td class="px-6 py-4">
                            8/10
                        </td>
                        <td class="px-6 py-4">
                            <p className='border-2 py-1 px-2 rounded-xl bg-accelloBlue text-white'>Paid</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default LoanHistory
