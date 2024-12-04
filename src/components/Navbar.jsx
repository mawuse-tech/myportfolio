import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the desired Font Awesome icon

const Navbar = () => {
  // State to manage dropdown visibility
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };


  // // Inside the Nav component, add the following useEffect
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (event.target.closest('.dropdown-menu') === null) {
  //       setDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);


  return (
    <div>
      <nav className='w-full flex flex-row justify-between items-center p-4 shadow-2xl shadow-blue-500/20 font-mono bg-[#242424]'>


        <Link to= "/">
          <h1 className="relative text-white text-xl font-bold before:absolute before:left-0 before:-top-2 after:absolute after:left-0 after:-bottom-2 before:bg-pink-800 after:bg-pink-800 before:w-full after:w-full before:h-1 after:h-1 mx-4">
            PORTFOLIO
          </h1>
        </Link>

        <Link to="/dashboard" className="ml-auto">
          <FontAwesomeIcon icon={faBars} className="text-white text-xl mx-4" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar