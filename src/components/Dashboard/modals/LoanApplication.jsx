import React from 'react'
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import { Tab } from '@headlessui/react'
import AboutTheLoan from './loanapplication/AboutTheLoan';
import PersonalLoanImage from '../../../assets/Dashboard/personal_loan.png'
import LoanDetails from './loanapplication/LoanDetails';
import BankDetails from './loanapplication/BankDetails';
import DocumentUpload from './loanapplication/DocumentUpload';
import Review from './loanapplication/Review';
import Terms from './loanapplication/Terms';
import Sign from './loanapplication/Sign';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const modalTabs = [
    { id: 1, title: "Get Started", details: "About the loan" },
    { id: 2, title: "Step 1", details: "Loan Details" },
    { id: 3, title: "Step 2", details: "Bank Details" },
    { id: 4, title: "Step 3", details: "Upload Documents" },
    { id: 5, title: "Step 4", details: "Review" },
    { id: 6, title: "Step 5", details: "Terms and Conditions" },
]
function LoanApplication({ open, handleClose }) {

    // const [selectedIndex, setSelectedIndex] = React.useState(0)
    // const handleSetIndex = () => setSelectedIndex((show) => show + 1);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lg:max-w-7xl lg:h-auto lg:w-[70%] w-full h-full p-8 rounded-lg font-NexaLight'>
                <div className=''>
                    <div className='lg:flex lg:flex-row-reverse  justify-between '>
                        <button onClick={handleClose} className='font-extrabold'><AiOutlineClose /></button>
                        <p className='text-3xl font-extrabold mt-1'>Loan Application</p>
                    </div>
                </div>

                <div>
                    {/* <Tab.Group className='sm:flex gap-16 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-8' as='div' selectedIndex={selectedIndex}> */}
                    <Tab.Group className='sm:flex gap-16 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-8' as='div' >
                        <Tab.List className='lg:w-[40%] py-4 pr-4 bg-background rounded-2xl lg:h-[500px]' as='div'>
                            <ol className="relative flex lg:flex-col flex-row py-4 pr-2 justify-between">
                                {modalTabs.map((item) => (
                                    <Tab
                                        
                                        className={({ selected }) =>
                                            classNames(
                                                'focus:outline-none tap-transparent py-4',
                                                selected
                                                    ? 'pointer-events-none lg:border-l-4 border-accelloBlue lg:bg-white lg:w-full lg:rounded-r-full text-accelloBlue text-extrabold'
                                                    : 'opacity-50'
                                            )}
                                    > <li>
                                            <div className='flex items-center gap-5 ml-4'>

                                                <div className='border p-2 rounded-full w-10 h-10' >
                                                    <p className='font-extrabold'>{item.id}</p>
                                                </div>

                                                <div className='text-left hidden lg:block'>
                                                    <p className='text-xs'>{item.title}</p>
                                                    <p className='text-[15px] font-NexaBold'>{item.details}</p>

                                                </div>
                                            </div>
                                        </li>
                                    </Tab>
                                ))}
                            </ol>
                        </Tab.List>

                        <Tab.Panels className={`lg:w-[60%]`}>
                            <div className='sm:mx-2 mx-auto'>
                                {/* <Tab.Panel> <AboutTheLoan loanName='Personal Loan' img={PersonalLoanImage} setIndex={handleSetIndex}/></Tab.Panel> */}
                                <Tab.Panel> <AboutTheLoan loanName='Personal Loan' img={PersonalLoanImage} /></Tab.Panel>
                                <Tab.Panel><LoanDetails /> </Tab.Panel>
                                <Tab.Panel> <BankDetails /></Tab.Panel>
                                <Tab.Panel> <DocumentUpload /> </Tab.Panel>
                                <Tab.Panel> <Review /> </Tab.Panel>
                                <Tab.Panel> <Sign /></Tab.Panel>
                                <Tab.Panel> <Terms /></Tab.Panel>
                            </div>
                        </Tab.Panels>

                    </Tab.Group>
                </div>


                

            </div>
        </Modal>
    )
}

export default LoanApplication
