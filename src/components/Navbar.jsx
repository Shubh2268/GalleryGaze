import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='hidden md:flex items-center justify-center'>
                <div className='flex justify-between px-7 py-3 w-full text-white backdrop-blur-[100px] border-b-2 border-gray-400 shadow-md shadow-gray-500'>
                    <Link to='/' className='flex items-center text-2xl font-semibold'>GalleryGaze</Link>
                    <div className='flex items-center'>
                        <a href="" className='font-medium mx-3 px-2 hover:text-gray-300'>Login</a>
                        <a href="" className='font-medium border-2 py-1 px-3 rounded-lg hover:bg-white hover:text-black'>SignUp</a>
                    </div>
                </div>
            </nav>

            {/* Mobile View  */}
            <nav className='flex items-center justify-center md:hidden'>
                <div className='flex justify-between px-7 py-3 w-full text-white backdrop-blur-[100px] border-b-2 border-gray-400 shadow-md shadow-gray-500'>
                    <Link to='/' className='flex items-center text-base font-medium'>GalleryGaze</Link>
                    <div className='flex items-center'>
                        <a href="" className='mx-1 px-2 hover:text-gray-300 text-xs'>Login</a>
                        <a href="" className='border-2 py-1 px-3 rounded-lg hover:bg-white hover:text-black text-xs'>SignUp</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
