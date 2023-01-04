import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
     const [isActive, setIsActive] = React.useState(false);
     const activeStyles = `flex flex-col md:hidden  fixed top-0 h-screen w-[50%] bg-[#000300] md: border-r border-r-gray-900 p-4 left-0 duration-500 ease-in-out` ;
     const normalStyles = `flex flex-col md:hidden  fixed top-0 h-screen w-[50%] bg-[#000300] md: border-r border-r-gray-900 p-4 left-[-100%] duration-500 ease-in-out`

     return (
          <div className='flex justify-between items-center h-24  max-w-[1200px] mx-auto px-4'>
               <h1 className='w-full text-[#10c5f8] text-3xl font-bold   '>Tailwind.</h1>
               <ul className="md:flex hidden">
                    <li className="p-4 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Home</li>
                    <li className="p-4 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Customers</li>
                    <li className="p-4 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Company</li>
                    <li className="p-4 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">About</li>
                    <li className="p-4 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Contact</li>
               </ul>
               <div className='md:hidden block '>
                    {
                         !isActive && (
                              <AiOutlineMenu size={25}
                                   className="cursor-pointer"
                                   onClick={() => setIsActive(true)} />
                         )
                    }
               </div>
               {
                    isActive && (
                         <div className={isActive ? activeStyles: normalStyles}>
                              <div className="flex justify-between items-center">
                                   <h1 className='w-full text-[#10c5f8] text-3xl font-bold   '>Tailwind.</h1>
                                   <AiOutlineClose size={25}
                                        className=" cursor-pointer"
                                        onClick={() => setIsActive(false)} />
                              </div>
                              <ul className="">
                                   <li className="p-4 border-b border-b-gray-900 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Home</li>
                                   <li className="p-4 border-b border-b-gray-900 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Customers</li>
                                   <li className="p-4 border-b border-b-gray-900 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Company</li>
                                   <li className="p-4 border-b border-b-gray-900 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">About</li>
                                   <li className="p-4 border-b border-b-gray-900 cursor-pointer hover:text-[#10c5f8] duration-300 text-lg">Contact</li>
                              </ul>
                         </div>
                    )
               }
          </div>
     )
}

export default Navbar