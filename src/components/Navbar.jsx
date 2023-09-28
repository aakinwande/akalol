import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#00d8ff]'>AKALOL</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center text-sm'>
            <li>SERVICES</li>
            <li>CUSTOMERS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <button className='ml-4 text-sm'>REQUEST A DEMO</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[120px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>SERVICES</li>
            <li className='text-2xl'>CUSTOMERS</li>
            <li className='text-2xl'>ABOUT US</li>
            <li className='text-2xl'>CONTACT US</li>
            <button className='m-8'>REQUEST A DEMO</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
