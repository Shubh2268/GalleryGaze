import React from 'react';

const ImageCard = () => {
  return (
    <button className='w-80 h-64 m-7'>
      <img src='https://pixabay.com/get/g0bec3fb69ab94ebd93260c453c8bf953b1080236decfa7e32483b1c6a23ab69cb2230e64dd6e47d5567e16a2a2911c8fab2d47702e82c6d23f00311368db577a_1280.jpg' alt='' className='w-[360px] h-[220px] rounded-t-md' />
      <div>
        <p className='bg-gray-100 text-gray-800 capitalize px-5 py-1 text-sm rounded-b-md'>computers, coding, tech</p>
      </div>
    </button>
  )
}

export default ImageCard;
