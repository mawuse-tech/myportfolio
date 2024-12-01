import React from 'react';
import pic from "../assets/images/mee.png";
import About from './About';
import Offers from './Offers';
import MyWork from './MyWork';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      <header className='bg-[#242424] w-full h-screen flex justify-center items-center font-mono'>
        {/* Centered black background div without top space */}
        <div className='w-[100%] md:w-[70%] h-[80vh] bg-[#242424] flex flex-col justify-center items-stretch shadow-lg md:shadow-2xl shadow-[rgba(0, 168, 255, 0.25)]'>
          {/* Navigation Bar at the top */}
          <Navbar />

          {/* Main Section: Avatar and Text */}
          <div className="flex flex-col md:flex-row justify-center items-center h-full space-y-6 md:space-y-0">
            {/* Avatar Image */}
            <motion.div 
              className="flex-1 flex justify-center md:justify-end md:pr-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem]">
                <img src={pic} alt="avatar" className="w-full h-full rounded-full object-cover  shadow-xl shadow-[rgba(255, 255, 255, 0.1)]" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="flex-1 text-center md:text-left px-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-white text-lg">Hi, I'm a <span className='text-pink-800'>Web Developer</span></p>
              <h1 className="text-[28px] md:text-[35px] font-extrabold text-white" data-text="MAWUSE AKPEKE">MAWUSE AKPEKE</h1>
              <p className="text-white mt-2">
                With a strong foundation in HTML, CSS, JavaScript, React, I thrive on turning ideas into reality. I love
                tackling challenges and continuously learning new technologies to enhance my skills.
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <motion.button 
                  className="w-[120px] h-[40px] p-2 bg-[#242424] text-white border-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[rgba(255, 255, 255, 0.3)] bg-pink-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Link to="/dashboard/contact">HIRE ME</Link>
                </motion.button>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Link
                    to="/dashboard"
                    className="inline-block w-[120px] h-[40px] p-2 bg-[#242424] text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[rgba(255, 255, 255, 0.3)] bg-pink-800 text-center"
                  >
                    LEARN MORE
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <About />
      <Offers />
      {/* <MyWork /> */}
      <Footer />
    </div>
  );
}

export default Home;
