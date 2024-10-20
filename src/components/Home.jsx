import React from 'react';
import pic from "../assets/images/profilePic.jpg"

function Home() {
  return (
    <div>
      <header className='bg-[#242424] w-full h-screen flex justify-center items-center'>
        {/* Centered black background div without top space */}
        <div className='w-[100%] md:w-[70%] h-[80vh] bg-[#242424] flex flex-col justify-start items-stretch shadow-2xl shadow-blue-500/20]'>
          {/* Navigation Bar at the top without any space */}
          <nav className='w-full flex flex-col md:flex-row justify-around items-center p-4 shadow-2xl shadow-blue-500/20]'>

            <h1 className='text-white text-xl font-bold'>PORTFOLIO</h1>
            <div className='flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white'>
              <h4 className='cursor-pointer hover:text-gray-300'>Home</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>About</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>Resume</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>Blog</h4>
              <h4 className='cursor-pointer hover:text-gray-300'>Contact</h4>
            </div>
          </nav>

          <div>
            <div className='w-32 h-32'>
              <img src={pic} alt="avatar" className='w-full h-full rounded-full object-cover' />
            </div>
            <div>
              <p>Hi I'm A Web Developer</p>
              <h1 data-text="MAWUSE AKPEKE">MAWUSE AKPEKE</h1>
              <p>With a strong foundation in HTML, CSS, JavaScript, React, I thrive on turning ideas into reality. I love
            tackling challenges and continuously learning new technologies to enhance my skills.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
