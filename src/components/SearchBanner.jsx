import React from 'react';
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";

const SearchBanner = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url(' + 'https://pixabay.com/get/gc0417da8b1139713047b3955e713a5f5d11b53bb32fb7a935d2a8e0d91fbb13f58396b1376d71f7a4843ebc21395a254_1280.jpg' + ')', }} className='h-1/2 w-screen bg-cover bg-center'>
        <div className='flex-col items-center justify-center'>
          <Navbar />
          <div className='flex items-center justify-center text-white'>
            <div className='flex items-center w-4/5 md:w-2/5 mt-10 mb-1 backdrop-blur-[100px] border-2 border-gray-400 rounded-lg md:rounded-xl shadow-md shadow-gray-500'>
              <FiSearch size={25} className='mx-1 md:mx-3' />
              <input type='text' id='searchInput' placeholder='Search Images..' className='my-1 md:my-3 text-base md:text-lg w-[80%] bg-transparent outline-none border-l-2 px-1 md:px-3 capitalize' />
              <button className='border-2 font-normal md:font-medium px-1 md:px-3 py-[1px] md:py-[2px] mr-1 md:mr-0 text-sm md:text-base rounded-lg hover:bg-white hover:text-black'>GO!</button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <h2 className='text-white font-semibold text-xl md:text-3xl my-10'>Results: Technology</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBanner;
