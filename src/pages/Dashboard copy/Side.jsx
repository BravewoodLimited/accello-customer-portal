import React from 'react'
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiViewGrid,
  HiUsers,
} from "react-icons/hi";
import {FaMoneyBill} from "react-icons/fa";
// import {GrTransaction} from "react-icons/gr";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { BiLogOut, BiTransferAlt } from "react-icons/bi";


const navigation = [
  {id: 1, name: 'Dashboard', href: "/dashboard", icon: HiViewGrid, },
  {id: 2, name: 'Loans', href: "/loans", icon: FaMoneyBill, },
  {id: 3, name: 'Transactions ', href: "/transactions",  icon: BiTransferAlt, },
  {id: 4, name: 'Profile', href: "/profile", icon: HiUsers, },
]

function Side(props) {

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;
    const myArray = newPage.split("/")
    const newPagePath = "/" + myArray[1]

    setCurrentPage(newPagePath);
  }, [setCurrentPage]);


  return (
    <Sidebar collapsed={props.collapsed} className='fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-[96px]'>
      <div className="flex h-full justify-between py-2 w-[270px]">
        <div>
          <Sidebar.Items className=''>
            <Sidebar.ItemGroup className='space-y-8 -ml-4'>
            {navigation.map((item) => (
              <div key={item.id} className={`
                ${item.href === currentPage ? "bg-gray-100 py-2 mr-10 rounded-r-full text-black flex items-center justify-between" : "text-gray-500 hover:text-red-700"}`
              }>
                <Sidebar.Item
                href={item.href}
                icon={item.icon}
                className={`px-7 py-2 mr-2 hover:bg-gray-100 hover:rounded-r-full`}
                
                >
                  {item.name}
                </Sidebar.Item>
                {item.href === currentPage ? 
                <div className='bg-white rounded-full mr-1 w-10 h-10'>
                  <ArrowRightIcon className="block p-2" aria-hidden="true"/> 
                </div>
                : "" }
              </div>
              ))}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/"
                icon={BiLogOut}
                color={`#00000`}
                className={`text-red-600  py-2 mr-10 hover:bg-gray-100 hover:rounded-r-full`}
              >
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  )
}

export default Side