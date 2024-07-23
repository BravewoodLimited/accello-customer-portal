// import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import { BsCreditCard2FrontFill, BsImages } from 'react-icons/bs';
import { FaBars, FaSpinner } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';
import {
    HiClipboardList,
    HiDeviceTablet,
    HiHome,
    HiMinus,
    HiOutlineChevronDoubleRight,
    HiPencilAlt,
    HiStar,
  } from 'react-icons/hi';


  export const routes =  [
    {
      title: 'Dashboard',
      icon: HiHome,
      href: '/',
    //   component: <DashboardPage />,
      group: false,
    },
    {
      title: 'Forms',
      icon: HiPencilAlt,
      href: '/forms',
    //   component: <FormsPage />,
      group: false,
      card: {
        className: 'w-40',
        images: { light: 'forms-light.svg', dark: 'forms-dark.svg' },
      },
    },
    {
      title: 'Footer',
      icon: HiMinus,
      href: '/footer',
    //   component: <FooterPage />,
      group: false,
      card: {
        className: 'w-40',
        images: { light: 'footer-light.svg', dark: 'footer-dark.svg' },
      },
    },
    {
      title: 'List group',
      icon: HiClipboardList,
      href: '/list-group',
    //   component: <ListGroupPage />,
      group: false,
      card: {
        className: 'w-36',
        images: { light: 'list-group-light.svg', dark: 'list-group-dark.svg' },
      },
    },
    {
      title: 'Modal',
      icon: HiDeviceTablet,
      href: '/modal',
    //   component: <ModalPage />,
      group: false,
      card: {
        className: 'w-36',
        images: { light: 'modal-light.svg', dark: 'modal-dark.svg' },
      },
    },
    {
      title: 'Navbars',
      icon: FiNavigation,
      href: '/navbars',
    //   component: <NavbarPage />,
      group: false,
      card: {
        className: 'w-56',
        images: { light: 'navbars-light.svg', dark: 'navbars-dark.svg' },
      },
    },
    {
      title: 'Pagination',
      icon: HiOutlineChevronDoubleRight,
      href: '/pagination',
    //   component: <PaginationPage />,
      group: false,
      card: {
        className: 'w-36',
        images: { light: 'pagination-light.svg', dark: 'pagination-dark.svg' },
      },
    },
    {
      title: 'Progress',
      icon: AiOutlineLoading3Quarters,
      href: '/progress',
    //   component: <ProgressPage />,
      group: false,
      card: {
        className: 'w-36',
        images: { light: 'progress-light.svg', dark: 'progress-dark.svg' },
      },
    },
    {
      title: 'Rating',
      icon: HiStar,
      href: '/rating',
    //   component: <RatingPage />,
      group: false,
      card: {
        className: 'w-40',
        images: { light: 'rating-light.svg', dark: 'rating-dark.svg' },
      },
    },
    {
      title: 'Sidebar',
      icon: FaBars,
      href: '/sidebar',
    //   component: <SidebarPage />,
      group: false,
      card: {
        className: 'w-16',
        images: { light: 'sidebar-light.svg', dark: 'sidebar-dark.svg' },
      },
    },
    {
      title: 'Spinners',
      icon: FaSpinner,
      href: '/spinners',
    //   component: <SpinnersPage />,
      group: false,
      card: {
        className: 'w-36',
        images: { light: 'spinners-light.svg', dark: 'spinners-dark.svg' },
      },
    },
  ];