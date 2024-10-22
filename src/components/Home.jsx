import React from 'react';
import pic from "../assets/images/profilePic.jpg";

function Home() {
  return (
    <div>
      <header className='bg-[#242424] w-full h-screen flex justify-center items-center'>
        {/* Centered black background div without top space */}
        <div className='w-[100%] md:w-[70%] h-[80vh] bg-[#242424] flex flex-col justify-start items-stretch shadow-2xl shadow-blue-500/20'>
          {/* Navigation Bar at the top */}
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

          {/* Main Section: Avatar and Text */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0">
            {/* Avatar Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem]">
                <img src={pic} alt="avatar" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left px-4">
              <p className="text-white text-lg">Hi, I'm a Web Developer</p>
              <h1 className="text-[28px] md:text-[35px] font-extrabold text-white" data-text="MAWUSE AKPEKE">MAWUSE AKPEKE</h1>
              <p className="text-white mt-2">
                With a strong foundation in HTML, CSS, JavaScript, React, I thrive on turning ideas into reality. I love
                tackling challenges and continuously learning new technologies to enhance my skills.
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <button className="w-[120px] h-[40px] p-2 bg-[#242424] text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                  HIRE ME
                </button>
                <button className="w-[120px] h-[40px] p-2 bg-[#242424] text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='bg-[#242424] w-full h-screen flex justify-center items-center'>
        {/* Main content div */}
        <div className='w-[100%] md:w-[70%] h-auto md:h-[80vh] bg-[#242424] flex flex-col justify-center items-center text-center px-6 md:px-12 shadow-2xl shadow-blue-500/20'>
          <h1 className='text-white text-3xl md:text-4xl font-bold mb-4'>Who Am I</h1>
          <h4 className='text-white text-xl md:text-2xl mb-4'>Developer And Designer</h4>
          <p className='text-white text-sm md:text-base leading-relaxed mb-8'>
            Hi there! I’m Mawuse Akpeke, a passionate junior developer with a love for crafting intuitive and engaging
            web applications. With a background in information studies, I thrive on turning ideas into reality through
            code.
            I’m continuously learning and exploring new technologies, particularly in HTML, CSS, JavaScript, React, and
            Tailwind. My goal is to create seamless user experiences while contributing to meaningful projects.
            When I’m not coding, you can find me designing clothing, always looking for inspiration in the world around
            me. I believe in the power of collaboration and am excited to connect with like-minded individuals.
            Let’s bring your ideas to life together!
          </p>
          <button className='px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition-all duration-300'>
            Let's Talk
          </button>
        </div>
      </div>
      <div className='bg-[#242424] w-full h-screen flex justify-center items-center'>
        
      </div>

    </div>


  );
}

export default Home;
