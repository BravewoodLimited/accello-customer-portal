import React from 'react'

function Terms() {
  return (
    <div>
        <div className='w-full '>
            <p className='font-NexaBold text-xl'>Terms and Condition </p>
        </div>
       <div className='text-center space-y-4 my-10'>
            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> 
            
            <p className='text-justify'> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <div className='flex gap-4 mt-10'>
                <button className="w-full h-[48px] bg-transparent hover:bg-accelloBlue font-bold rounded-lg text-sm px-5 py-2.5 text-cente border border-accelloBlue text-accelloBlue disabled:opacity-50" disabled>No, I Decline</button>
                <button className="w-full h-[48px] text-white bg-accelloBlue hover:bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50" disabled >Get Started</button>
            </div>
       </div>
    </div>
  )
}

export default Terms
