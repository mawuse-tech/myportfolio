import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaFilm, FaBook, FaCode, FaMusic, FaCamera } from 'react-icons/fa';

const Fun = () => {
  const hobbies = [
    {
      icon: <FaTshirt size={40} />,
      title: "Fashion Design",
      description: "Passionate about creating unique clothing designs and exploring creative fashion concepts.",
      color: "#FF6B6B"
    },
    {
      icon: <FaFilm size={40} />,
      title: "Movie Enthusiast",
      description: "Love diving into different film genres and analyzing cinematography.",
      color: "#4ECDC4"
    },
    {
      icon: <FaBook size={40} />,
      title: "Bookworm",
      description: "Always exploring new worlds through books and expanding knowledge.",
      color: "#45B7D1"
    },
    // Added three new hobbies
    {
      icon: <FaCode size={40} />,
      title: "Code Artist",
      description: "Creating beautiful user interfaces and turning ideas into interactive experiences.",
      color: "#9B59B6"
    },
    {
      icon: <FaMusic size={40} />,
      title: "Music Lover",
      description: "Finding inspiration in different genres and coding to my favorite tunes.",
      color: "#E67E22"
    },
    {
      icon: <FaCamera size={40} />,
      title: "Photography",
      description: "Capturing beautiful moments and finding inspiration in visual storytelling.",
      color: "#2ECC71"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Beyond The Code
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            style={{ backgroundColor: hobby.color + '15' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4" style={{ color: hobby.color }}>
                {hobby.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3">{hobby.title}</h2>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center text-gray-600"
      >
        <p className="text-lg">
          "Combining creativity in code and life – that's what makes frontend development exciting!"
        </p>
      </motion.div>
    </div>
  );
};

export default Fun;
