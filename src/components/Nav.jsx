import React from 'react'
import { useEffect } from 'react';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the desired Font Awesome icon

const Nav = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  

// Inside the Nav component, add the following useEffect
useEffect(() => {
  const handleClickOutside = (event) => {
    if (event.target.closest('.dropdown-menu') === null) {
      setDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);


  return (
    <div>
      <nav className='w-full flex flex-col md:flex-row justify-around items-center p-4 shadow-2xl shadow-blue-500/20'>
        <h1 className='text-white text-xl font-bold'>PORTFOLIO</h1>
        <div className='relative'>
          {/* Dropdown toggle icon */}
          <div 
            className='flex items-center cursor-pointer text-white' 
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faBars} className='text-2xl' />
          </div>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-pink-800 rounded-lg shadow-lg z-20 text-white'>
              <div className='flex flex-col p-2'>
                <h4 className='cursor-pointer hover:text-gray-300 p-2'>Home</h4>
                <h4 className='cursor-pointer hover:text-gray-300 p-2'>About</h4>
                <h4 className='cursor-pointer hover:text-gray-300 p-2'>Resume</h4>
                <h4 className='cursor-pointer hover:text-gray-300 p-2'>Blog</h4>
                <h4 className='cursor-pointer hover:text-gray-300 p-2'>Contact</h4>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav