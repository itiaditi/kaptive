import React, { useState } from 'react'
import ChartComponent from './Chart'
import TableComponent from './TableComponent'
import { FaBars } from 'react-icons/fa';

export  const TopOptions=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    return(
        <>
         {/* Hamburger Icon for Small and Medium Screens */}
         <div className='flex lg:hidden justify-between p-4'>
            <button onClick={toggleMenu} className='text-2xl'>
              <FaBars />
            </button>
          </div>

          {/* Buttons for Large Screens */}
          <div className='hidden lg:flex m-5 justify-between'>
            <div className='flex mt-5'>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Summary</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Balance Sheet</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Income Statement</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Cashflow</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>+</button>
            </div>
            <div className='flex mt-5'>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Normal View</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Growth View</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Period From</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Period To</button>
            </div>
          </div>

          {/* Dropdown Menu for Small and Medium Screens */}
          {menuOpen && (
            <div className='lg:hidden flex flex-col p-4'>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Summary</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Balance Sheet</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Income Statement</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Cashflow</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>+</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Normal View</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Growth View</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Period From</button>
              <button className='shadow-lg shadow-indigo-500/40 p-2 mb-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100'>Period To</button>
            </div>
          )}
        </>
    )
}
const Dashboard = () => {
  
  return (
    <div>
        {/* <TopOptions/> */}
      <ChartComponent/>
      <div className='mt-10'>
        <TableComponent/>
    </div>
    </div>
  )
}

export default Dashboard
