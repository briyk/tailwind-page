import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center w-full h-screen max-w-[800px] mx-auto'>
          <p className='uppercase text-[#10c5f8] font-medium text-xl'>Grow with data analytics</p>
          <h1 className='font-bold text-4xl my-2'>Save Your Data..</h1>
          <div className='flex items-center'>
               <p className='text-1xl md:text-3xl my-2 font-medium'>Fast, Flexiable Financing For{" "} </p>{" "}
               <Typed
               className='text-1xl md:text-3xl my-2 font-medium pl-1 text-gray-400'
                strings={['BTB','BTC','SASS']}
                typeSpeed={120}
                    backSpeed={140}
                    loop />
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500 px-4'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <button className='bg-[#10c5f8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
    </div>
  )
}

export default Hero