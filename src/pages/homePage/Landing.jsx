import React from 'react'

import money from '../../assets/Landing/money.png'
import percent from '../../assets/Landing/percent.png'
import calendar from '../../assets/Landing/calendar.png'

import Nav from './Nav'
import Hero from './Hero'
import LoansForYou from './LoansForYou'
import Calculator from './Calculator'
import HowItWorks from './HowItWorks'
import Difference from './Difference'
import Footer from './Footer'
import MobileApp from './MobileApp'
import LoanApplicationModal from './LoanApplicationModal'


const HeroBottom = [
  {img : money, p1: 'Loans Up to', p2: '₦5,000,000'},
  {img : percent, p1: 'Rates Starting From', p2: '3.45%*'},
  {img : calendar, p1: 'Terms Ranging From', p2: '1-36 months'},

]

console.log("yeah")

function Landing() {
  const [open, setOpen] = React.useState(false);

    

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
  return (
    <>

    <div className='relative bg-gradient-radial from-gray-900 to-black sm:h-[758px] overflow-x-hidden'>
        <Nav handleClickOpen={handleClickOpen}/>
        <Hero />

        <div className='hidden lg:block h-[88px] bg-bgOpacity mt-[18px] text-white'>
          <div>

            <div className='flex justify-around 2xl:mx-[300px] items-center'>
            {HeroBottom.map((item) => (
              <div className='flex gap-2 my-[20px]'>
                <img src={item.img} alt="" className='w-10 h-10'/>
                <div className='font-NexaLight'>
                  <p className='text-[13px]'>{item.p1}</p>
                  <p className='font-bold'>{item.p2}</p>
                </div>

              </div>
            ))}

            </div>
            <p className='text-white text-center text-[10px] -mt-3'>*Rates are determined by several factors, terms and the conditions of loans</p>




          </div>
          

        </div>
    </div>

    <div>
      <Difference/>
      <LoansForYou/>
      <HowItWorks handleClickOpen={handleClickOpen}/>
      <Calculator handleClickOpen={handleClickOpen}/>
      <MobileApp/>
      <Footer/>
    </div>


    <LoanApplicationModal open={open} handleClose={handleClose} />
    
    
    
    </>
    
  )
}

export default Landing