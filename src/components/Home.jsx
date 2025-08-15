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
     <header className="bg-[#242424] w-full min-h-screen flex justify-center items-center font-mono px-4 sm:px-6 lg:px-8">
  <div className="w-full md:w-[85%] lg:w-[70%] min-h-[80vh] bg-[#242424] flex flex-col justify-center items-stretch shadow-lg md:shadow-2xl shadow-[rgba(31,33,34,0.25)]">
    {/* Navigation Bar */}
    <Navbar />

    {/* Main Section */}
    <div className="flex flex-col md:flex-row justify-center items-center flex-grow gap-8 md:gap-12 mt-6 md:mt-0">
      {/* Avatar */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end md:pr-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-[15rem] h-[15rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] lg:h-[18rem]">
          <img src={pic} alt="avatar" className="w-full h-full rounded-full object-cover" />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left px-2 sm:px-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-white text-base sm:text-lg">
          Hi, I'm a <span className="text-pink-800">Full Stack Developer</span>
        </p>
        <h1 className="text-[22px] sm:text-[28px] md:text-[35px] font-extrabold text-white" data-text="MAWUSE AKPEKE">
          MAWUSE AKPEKE
        </h1>
        <p className="text-white mt-3 text-sm sm:text-base leading-relaxed max-w-xl">
          With a passion for creating user-friendly and visually engaging web experiences, I thrive on transforming ideas into interactive realities. I enjoy tackling challenges, crafting solutions that blend creativity with functionality, and continuously learning to stay ahead in the ever-evolving world of tech.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
          <motion.button
            className="min-w-[110px] px-4 py-2 bg-pink-800 text-white border border-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[rgba(255,255,255,0.3)]"
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
              className="inline-block min-w-[110px] px-4 py-2 bg-pink-800 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[rgba(255,255,255,0.3)] text-center"
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
