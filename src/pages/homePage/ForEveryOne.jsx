import React from 'react'
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, AccordionDetails } from '../../custom/CustomAccordion';
import test1 from '../../assets/Landing/testimonial1.png'
import Carousel, {CarouselItem} from '../../custom/Carousel'

const testimonals = [
    {img: test1, p: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.", name: 'Mike Adepoju', title: 'General Manager, Prime Engineering Limited'},

    {img: test1, p: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.", name: 'Mike Adepoju', title: 'General Manager, Prime Engineering Limited'},
]

function ForEveryOne() {


    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
<<<<<<< HEAD
    <div name="Why" className='px-4 py-[80px] text-black bg-background'>
=======
    <div name="Why" className='px-4 py-[80px] text-black bg-landingbackground'>
>>>>>>> staging
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center'>
          <h1 className='font-NexaBold text-[36px]'>Why You'll Love Accello</h1>
          <p className='text-[16px]'>We’re 100% focused on helping thousands of individuals in both public and private sector reach their goals.</p>
        </div>

        <div className='sm:flex gap-28 flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between mt-8'>


        <div className='sm:max-w-[50%] mx-auto mt-12 order-1'>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography fontSize={22} fontFamily={'gilroy'}>Fast Decision</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Same-day decision, funds sent within hours.
                </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography fontSize={22} fontFamily={'gilroy'} >Competitive rates</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Fixed low rates
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography fontSize={22} fontFamily={'NexaBold'}>Experience Ease</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Get the money you need from the comfort of your home.
                </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography fontSize={22} fontFamily={'NexaBold'}>Affordable repayments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Benefit from manageable repayment plan that fit your budget
                </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography fontSize={22} fontFamily={'NexaBold'}>Swift and Easy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                No Paperwork, No Collateral, and No Guarantors
                </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography fontSize={22} fontFamily={'gilroy'}>Technology Driven</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Easy to use, state-of-the-art technology allowing you to complete the entire process online.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>

                <div className='sm:max-w-[50%] mt-12'>

                    <div className='sm:w-[554px] sm:h-[414px] rounded-[25px] bg-accelloBlue'>

                        <div className='p-12 text-white'>

                            <Carousel>
                            {testimonals.map((item) => ( 
                                <CarouselItem>
                                    <div className='relative' >
                                        <img className='rounded-full' src={item.img} alt="testimonal 1" />

                                        <div>
                                            <div className='mt-[30px] mb-[72px]'>
                                            <p className='whitespace-normal'>“{item.p}”</p>
                                        </div>

                                        <hr />

                                        <div className='mt-4'>

                                            <p>{item.name}</p>
                                            <h3 className='font-NexaLight font-bold'>{item.title}</h3>

                                        </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                ))}


                                
                            </Carousel>


                        </div>

                    </div>

                    
                   

                </div>



                

               



                

        </div>
    </div>
  )
}

export default ForEveryOne