import React from 'react'

function AboutTheLoan({img, loanName, setIndex}) {
  return (
    <div>
       <div className='text-center space-y-4'>
            <img src={img} alt="loan personal" className='max-w-full mx-auto w-20 h-20' />
            <p className='text-2xl font-NexaBold'>About {loanName}</p>
            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center" onClick={setIndex}>Get Started</button>
       </div>
    </div>
  )
}

export default AboutTheLoan
