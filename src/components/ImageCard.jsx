import React from 'react';

const ImageCard = () => {
  return (
    <button className='w-80 h-64 m-7'>
      <img src='https://pixabay.com/get/gd4571944d16de772fa1547bf25df512cc6a939701cdabffe41bc47265065f00c8562610131e6a01367238c1ae82c291bbdeb00ec9e97e3056d7fa1b23f4106a3_1280.jpg' alt='' className='w-[360px] h-[220px] rounded-t-md' />
      <div>
        <p className='bg-gray-200 text-gray-800 font-medium tracking-wide capitalize py-2 text-sm rounded-b-md'>computers, coding, tech</p>
      </div>
    </button>
  )
}

export default ImageCard;
