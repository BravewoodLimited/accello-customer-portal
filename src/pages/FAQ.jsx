import React from 'react'
import Nav from '../components/About/Nav'
import Footer from '../components/Landing/Footer'
import MobileApp from '../components/Landing/MobileApp'
import Faqs from '../components/Faqs/Faqs'

function FAQ() {
  return (
    <div>
        
        <div className='relative bg-background'>
            <Nav/>
            <Faqs/>
            <div className='my-28'></div>
            <MobileApp/>
            <Footer/>
        </div>
    </div>
  )
}

export default FAQ