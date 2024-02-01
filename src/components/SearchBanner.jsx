import React from 'react';
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";

const SearchBanner = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url(' + 'https://pixabay.com/get/gd4571944d16de772fa1547bf25df512cc6a939701cdabffe41bc47265065f00c8562610131e6a01367238c1ae82c291bbdeb00ec9e97e3056d7fa1b23f4106a3_1280.jpg' + ')', }} className='h-1/2 w-screen bg-cover bg-center'>
        <div className='flex-col items-center justify-center'>
          <Navbar />
          <div className='flex items-center justify-center text-white'>
            <div className='flex items-center w-4/5 md:w-2/5 mt-12 md:mt-28 mb-1 backdrop-blur-[100px] border-2 border-gray-400 rounded-lg md:rounded-xl shadow-md shadow-gray-500'>
              <FiSearch className='mx-1 md:mx-3 sm:text-2xl' />
              <input type='text' id='searchInput' placeholder='Search Images..' className='my-1 md:my-2 text-sm md:text-lg w-full bg-transparent outline-none border-l-2 px-1 md:px-3 capitalize' />
              <button className='border-2 font-normal md:font-medium px-1 md:px-3 py-[1px] md:py-[2px] mr-1 md:mr-2 text-xs md:text-base rounded-md md:rounded-lg hover:bg-white hover:text-black'>GO!</button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <h2 className='text-white font-semibold text-xl md:text-3xl my-5 md:my-10'>Results: Technology</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBanner;
