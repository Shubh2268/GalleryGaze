import React from 'react';

const ImageCard = ({ img, tags }) => {
  return (
    <button className='w-64 lg:w-96 h-40 lg:h-60 m-7'>
      <img src={img} alt='' className='w-full h-full rounded-t-md' />
      <div>
        <p className='bg-gray-100 text-gray-700 font-medium tracking-wide capitalize py-2 text-xs rounded-b-md'> {tags} </p>
      </div>
    </button>
  )
}

export default ImageCard;
