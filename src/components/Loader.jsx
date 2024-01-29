import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='flex justify-center my-7'>
        <Oval visible={true} height='40' width='40' color='#000' ariaLabel='oval-loading' />
    </div>
  )
}

export default Loader;
