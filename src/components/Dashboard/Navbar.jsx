import {React, useState, useEffect} from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as DomLink, NavLink } from 'react-router-dom';
import Logo from '../../assets/Landing/NewLogo2.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Profile from '../../custom/Profile';
import Notification from '../../custom/Notification';




const navigation = [
    { id: 1, name: 'Dashboard', to: "/dashboard", },
    { id: 2, name: 'Loans', to: "/loans", },
    { id: 3, name: 'Transactions ', to: "/transactions",  },
    { id: 4, name: 'Profile', to: "/profile", },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Navbar({BreadCrumbs}) {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;
    const myArray = newPage.split("/")
    const newPagePath = "/" + myArray[1]

    setCurrentPage(newPagePath);
  }, [setCurrentPage]);

  return (
    <Disclosure as="nav" className="bg-white xs:p-4 p-1 font-NexaLight fixed w-screen z-50 md:shadow-none shadow-xl">
            {({ open }) => (
                <>
                    <div className="sm:mx-[30px] px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            

                            <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
                                <div className="flex items-center justify-start">
                                    <DomLink to='/'>
                                        <img className="block w-28 lg:hidden" src={Logo} alt="Accello Limited" />
                                        <img className="hidden w-28 lg:block" src={Logo} alt="Accello Limited" />
                                    </DomLink>

                                    <div className="hidden ml-[100px] sm:block">
                                        <p className="text-[20px] text-accelloBlue font-extrabold">{BreadCrumbs}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <button className='text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100'>
                                        <AiOutlineSearch className='h-11 w-11 p-2'/>

                                    </button>

                                    <Notification/>
                                    <Profile/>
                                    
                                </div>
                            </div>

                           

                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-accelloBlue hover:bg-accelloBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accelloBlue">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            
                        </div>
                    </div>

                    <Disclosure.Panel className="relative sm:hidden h-screen">
                        <div className="block space-y-6 px-2 pt-2 pb-3 mt-20">
                            {navigation.map((item) => (
                                <NavLink 
                                    to={item.to}
                                    className={classNames('py-2 text-[25px] font-extrabold cursor-pointer opacity-50 px-4 flex', item.to === currentPage ? 'opacity-100 font-NexaBold border-r-[4px] border-r-accelloBlue' :  ''
                                        )}
                                    key={item.id}
                                        >
                                    <Disclosure.Button
                                        key={item.id}
                                        as="p" >
                                            {item.name}
                                    </Disclosure.Button>
                                </NavLink>
                            ))}

                            
                            
                        </div>

                        <div className='fixed bottom-[30px] flex justify-between'>
                                
                                <DomLink to="/loan/signin">
                                    <button type="button" className="inline-flex border-2 border-white rounded-[8px] bg-accelloBlue py-4 px-8 text-white  gap-2 text-center items-center" >
                                    Apply for Loan
                                    </button>
                                </DomLink>

                                <button className='text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 fixed right-[30px]'>
                                    <AiOutlineSearch className='h-14 w-14 p-2'/>

                                </button>
                            </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
  )
}

export default Navbar