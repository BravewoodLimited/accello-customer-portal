import React from 'react'
import Nav from '../components/About/Nav'
import Footer from '../components/Landing/Footer'
import ContactForm from '../components/Contact/ContactForm'

function ContactUs() {
  return (
    <div>
        
        <div className='relative'>
            <Nav/>
            <ContactForm/>
            <Footer/>
        </div>
    </div>
  )
}

export default ContactUs