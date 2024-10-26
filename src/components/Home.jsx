import React from 'react';
import pic from "../assets/images/profilePic.jpg";
import About from './About';
import Nav from './Nav';
import Offers from './Offers';





function Home() {
  return (
    <div>
      <header className='bg-[#242424] w-full h-screen flex justify-center items-center'>
        {/* Centered black background div without top space */}
        <div className='w-[100%] md:w-[70%] h-[80vh] bg-[#242424] flex flex-col justify-start items-stretch shadow-2xl shadow-blue-500/20'>
          {/* Navigation Bar at the top */}

          <Nav />

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

      <div>
        <About />
      </div>

     <div>
      <Offers/>
     </div>
     
    </div>
  );
}

export default Home;
