import React from 'react';

function About() {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      {/* Main content div */}
      <div className="w-full md:w-[70%] h-auto md:h-[80vh] bg-[#242424] flex flex-col justify-center items-center text-center px-6 md:px-12 py-8 md:py-12 shadow-2xl shadow-blue-500/20 space-y-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold">Who Am I</h1>
        <h4 className="text-white text-xl md:text-2xl">Developer And Designer</h4>
        
        <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl px-4 md:px-0">
          Hi there! I’m Mawuse Akpeke, a passionate junior developer with a love for crafting intuitive and engaging
          web applications. With a background in information studies, I thrive on turning ideas into reality through
          code.
        </p>
        
        <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl px-4 md:px-0">
          I’m continuously learning and exploring new technologies, particularly in HTML, CSS, JavaScript, React, and
          Tailwind. My goal is to create seamless user experiences while contributing to meaningful projects.
          When I’m not coding, you can find me designing clothing, always looking for inspiration in the world around
          me. I believe in the power of collaboration and am excited to connect with like-minded individuals.
          Let’s bring your ideas to life together!
        </p>
        
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition-all duration-300">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default About;
