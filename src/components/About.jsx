import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center font-mono">
      {/* Main content div */}
      <div className="w-full md:w-[70%] h-auto md:h-[80vh] bg-[#242424] flex flex-col justify-center items-center text-center px-6 md:px-12 py-8 md:py-12 shadow-2xl shadow-blue-500/20 space-y-4">
        
        {/* Heading with Animation */}
        <motion.h1 
          className="text-white text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who Am I
        </motion.h1>
        
        {/* Subheading with Animation */}
        <motion.h4 
          className="text-white text-xl md:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Developer And <span className='text-pink-800'>Designer</span>
        </motion.h4>
        
        {/* Paragraphs with Animation */}
        <motion.p 
          className="text-white text-sm md:text-base leading-relaxed max-w-3xl px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi there! I’m Mawuse Akpeke, a passionate junior developer with a love for crafting intuitive and engaging
          web applications. With a background in information studies, I thrive on turning ideas into reality through
          code.
        </motion.p>
        
        <motion.p 
          className="text-white text-sm md:text-base leading-relaxed max-w-3xl px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’m continuously learning and exploring new technologies, particularly in HTML, CSS, JavaScript, React, and
          Tailwind. My goal is to create seamless user experiences while contributing to meaningful projects.
          When I’m not coding, you can find me designing clothing, always looking for inspiration in the world around
          me. I believe in the power of collaboration and am excited to connect with like-minded individuals.
          Let’s bring your ideas to life together!
        </motion.p>

        {/* Button with Animation */}
        <motion.button 
          className="w-[120px] h-[40px] p-2 bg-[#242424] text-white border-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[rgba(255, 255, 255, 0.3)] bg-pink-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link to="/dashboard/fun">LEARN MORE</Link>
        </motion.button>
      </div>
    </div>
  );
}

export default About;
