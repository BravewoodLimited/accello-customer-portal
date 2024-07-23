import React, { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, LockClosedIcon, ArrowRightIcon} from '@heroicons/react/24/outline'
import Logo from '../../assets/Landing/NewLogo.png'
import { Link } from "react-scroll";
import { Link as DomLink } from 'react-router-dom';


const navigation = [
    { name: 'Home', current: true, to: "/", duration: 1000, offset: -300 , moff: -100, condition: false},
    { name: 'About Us', current: false, to: "/about-us", duration: 1000, offset: -300 , moff: -100, condition: false},
    // { name: 'Loan Calculator', current: false, to: "calculator", duration: 1500, offset: -100, moff: -310, condition: true},
    { name: 'Faqs ', current: false, to: "/faqs", duration: 1800, offset: -100, moff: -350, condition: false },
    { name: 'Contact us', current: false, to: "/contact", duration: 1000, offset: -150, moff: -350, condition: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Nav({handleClickOpen}) {
    return (
        <Disclosure as="nav" className="bg-transparent p-4">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            

                            <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="block w-36 lg:hidden" src={Logo} alt="Accello Limited" />
                                    <img className="hidden w-36 lg:block" src={Logo} alt="Accello Limited" />
                                </div>

                                <div className="hidden sm:ml-6 sm:block mt-8">
                                    <div className="flex space-x-4 pt-4">
                                        {navigation.map((item, i) => (
                                        <div key={i+'lkj'}>
                                            <DomLink
                                                to={item.to}
                                                key={item.name}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                                                    'px-3 py-2 rounded-md font-medium cursor-pointer'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                    {item.name}
                                            </DomLink></div>
                                        ))}
                                    </div>
                                </div>

                                

                                


                                <div className="hidden sm:ml-6 sm:block mt-10">
                                    <div className="flex space-x-4">
                                        {/* <DomLink to="/sign-in"> */}
                                            <DomLink to="/auth/signin" type="button" className="inline-flex border-2 border-white rounded-md bg-transparent 2xl:py-4 2xl:px-8 px-6 py-2.5 md:mt-2 2xl:md-1 text-white hover:text-black hover:bg-white gap-2 text-center " >
                                                <LockClosedIcon className="block h-5 w-5" aria-hidden="true"/>
                                                Login
                                            </DomLink>
                                        {/* </DomLink> */}

                                        {/* <DomLink to="/sign-up"> */}
                                            <DomLink to="/auth/signin" type="button" className="inline-flex border-2 border-white rounded-md bg-white 2xl:py-4 2xl:px-8 px-4 py-2.5 md:mt-2 2xl:md-1 text-black gap-2 text-center items-center hover:bg-transparent hover:text-white" >
                                            Create Account
                                            <ArrowRightIcon className="block h-4 w-3" aria-hidden="true"/>
                                            </DomLink>
                                        {/* </DomLink> */}
                                    </div>
                                </div>



                            </div>

                           

                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

                    <Disclosure.Panel className="sm:hidden">
                        <div className="block space-y-6 px-2 pt-2 pb-3 mt-8">
                            {navigation.map((item) => (

                            <>
                            {item.condition ? 
                            <Link to={item.to} smooth={true} offset={item.moff} duration={item.duration} spy={true}>
                                <Disclosure.Button
                                    key={item.name}
                                    as="p"
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    
                                        {item.name}
                                    

                                    
                                </Disclosure.Button>
                            </Link>
                            :
                            <DomLink to={item.to}>
                                <Disclosure.Button
                                    key={item.name}
                                    as="p"
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    
                                        {item.name}
                                    

                                    
                                </Disclosure.Button>
                            </DomLink>
                            }
                            </>
                            ))}

                            <div className='flex flex-col w-[200px] gap-5'>
                                <DomLink to="/sign-up">
                                    <button type="button" className="hover:text-black hover:bg-white inline-flex border-2 border-white rounded-md bg-transparent py-4 px-8 text-white gap-2 text-center " >
                                        <LockClosedIcon className="block h-5 w-5" aria-hidden="true"/>
                                        Login
                                    </button>
                                </DomLink>

                                <DomLink to="/sign-up">
                                    <button type="button" className="inline-flex border-2 border-white rounded-md bg-white py-4 px-8 text-black hover:text-white gap-2 text-center items-center hover:bg-transparent" >
                                    Create Account
                                    <ArrowRightIcon className="block h-4 w-3" aria-hidden="true"/>
                                    </button>
                                </DomLink>
                            </div>
                            
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Nav