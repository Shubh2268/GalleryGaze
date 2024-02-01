import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10 py-5 flex flex-col items-center justify-center bg-slate-900 text-white'>
            <div className='flex items-center justify-center'>
                <h2 className='text-lg md:text-2xl font-bold p-2 italic'>GalleryGaze</h2>
            </div>
            <p className='text-xs md:text-xl p-1 md:p-2 font-medium italic text-center'>Designed and Developed by <span className='uppercase bg-gradient-to-r from-red-600 to-slate-200 bg-clip-text text-transparent font-bold'>shubham tiwari</span></p>
        </div>
    )
}

export default Footer;
