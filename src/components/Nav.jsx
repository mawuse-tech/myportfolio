import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='w-full flex flex-col md:flex-row justify-around items-center p-4 shadow-2xl shadow-blue-500/20'>
            <h1 className='text-white text-xl font-bold'>PORTFOLIO</h1>
            <div className='flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white'>
              <h4 className='cursor-pointer hover:text-gray-300'>Home</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>About</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>Resume</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>Blog</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>Contact</h4>
            </div>
          </nav>
    </div>
  )
}

export default Nav