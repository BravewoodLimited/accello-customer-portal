import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  LockClosedIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/Landing/NewLogo2.png";
// import { Link } from "react-scroll";
import { Link as DomLink, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about-us" },
  { name: "Faqs ", to: "/faqs" },
  { name: "Contact Us", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  return (
    <Disclosure as="nav" className="bg-transparent p-4 text-accelloBlue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0  items-center">
                  <DomLink to="/">
                    <img
                      className="block w-36 lg:hidden"
                      src={Logo}
                      alt="Accello Limited"
                    />
                    <img
                      className="hidden w-36 lg:block"
                      src={Logo}
                      alt="Accello Limited"
                    />
                  </DomLink>
                </div>

                <div className="hidden lg:ml-6 lg:block mt-8 ">
                  <div className="flex space-x-4 pt-4">
                    {navigation.map((item) => (
                      <NavLink
                        to={item.to}
                        key={item.name}
                        className={({ isActive, isPending }) =>
                          classNames(
                            "px-3 py-2 rounded-md font-medium  cursor-pointer",
                            isActive
                              ? "text-accelloBlue "
                              : isPending
                              ? "text-[#000000] "
                              : "hover:text-accelloBlue text-black  font-medium"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:ml-6 lg:block mt-10">
                  <div className="flex space-x-4">
                    <DomLink to="/sign-in">
                      <button
                        type="button"
                        className="inline-flex border-2 border-accelloBlue rounded-[8px] bg-transparent 2xl:py-4 2xl:px-8 px-6 py-2.5 md:mt-2 2xl:md-1 text-accelloBlue hover:text-white hover:bg-accelloBlue gap-2 text-center "
                      >
                        <LockClosedIcon
                          className="block h-5 w-5"
                          aria-hidden="true"
                        />
                        Login
                      </button>
                    </DomLink>

                    <DomLink to="/loan/signin">
                      <button
                        type="button"
                        className="inline-flex border-2 border-accelloBlue rounded-[8px] bg-accelloBlue 2xl:py-4 2xl:px-8 px-6 py-2.5 md:mt-2 2xl:md-1 text-white  gap-2 text-center items-center hover:bg-transparent hover:text-accelloBlue"
                      >
                        Get Credit
                        <ArrowRightIcon
                          className="block h-4 w-3"
                          aria-hidden="true"
                        />
                      </button>
                    </DomLink>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
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

          <Disclosure.Panel className="lg:hidden">
            <div className="block space-y-6 px-2 pt-2 pb-3 mt-8">
              {navigation.map((item) => (
                <NavLink
                  to={item.to}
                  className={({ isActive, isPending }) =>
                    classNames(
                      "w-full px-3 py-2 flex flex-col rounded-md text-sm font-medium cursor-pointer",
                      isActive
                        ? "text-white bg-accelloBlue w-full"
                        : isPending
                        ? "text-[#000000] hover:bg-accelloBlue hover:text-white"
                        : ""
                    )
                  }
                >
                  <Disclosure.Button key={item.name} as="p" className="w-full">
                    {item.name}
                  </Disclosure.Button>
                </NavLink>
              ))}

              <div className="flex flex-col w-[200px] gap-5">
                <DomLink to="/sign-in">
                  <button
                    type="button"
                    className="inline-flex border-2 border-accelloBlue rounded-[8px] bg-transparent py-4 px-8 text-accelloBlue hover:text-accelloBlue gap-2 text-center  "
                  >
                    <LockClosedIcon
                      className="block h-5 w-5"
                      aria-hidden="true"
                    />
                    Login
                  </button>
                </DomLink>

                <DomLink to="/loan/signin">
                  <button
                    type="button"
                    className="inline-flex border-2 border-white rounded-[8px] bg-accelloBlue py-4 px-8 text-white  gap-2 text-center items-center"
                  >
                    Create Account
                    <ArrowRightIcon
                      className="block h-4 w-3"
                      aria-hidden="true"
                    />
                  </button>
                </DomLink>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
