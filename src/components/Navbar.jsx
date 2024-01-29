import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='hidden md:flex items-center justify-center'>
                <div className='flex justify-between px-7 py-3 my-7 w-4/5 backdrop-blur-[100px] text-white border-2 border-gray-400 shadow-md shadow-gray-500 rounded-xl'>
                    <Link to='/' className='flex items-center text-xl font-medium'>Homepage</Link>
                    <div className='flex items-center'>
                        <a href="" className='mx-3 px-2 hover:text-gray-300'>Login</a>
                        <a href="" className='border-2 border-gray-500 py-1 px-3 rounded-lg hover:bg-white hover:text-black'>Create Account</a>
                    </div>
                </div>
            </nav>

            {/* Mobile View  */}
            <nav className='flex items-center justify-center md:hidden'>
                <div className='flex justify-between px-4 py-2 my-7 mx-4 w-full backdrop-blur-[100px] text-white border-2 border-gray-400 shadow-md shadow-gray-500 rounded-xl'>
                    <Link to='/' className='flex items-center text-lg font-medium'>Home</Link>
                    <div className='flex items-center'>
                        <a href="" className='mx-1 px-2 hover:text-gray-300 text-xs'>Login</a>
                        <a href="" className='border-2 border-gray-500 py-1 px-3 rounded-lg hover:bg-white hover:text-black text-xs'>SignUp</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
