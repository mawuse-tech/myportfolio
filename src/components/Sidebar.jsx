import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion';

function Sidebar() {
  return (
    <div className="bg-[#242424] text-white h-full p-6 font-mono">
      <motion.h2
        className="text-2xl font-bold mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Dashboard
      </motion.h2>
      <motion.ul
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/dashboard">Resume</Link>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/dashboard/link">My Projects</Link>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/contact">Contact Information</Link>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/projects">Projects</Link>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link to="/skills">Skills</Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default Sidebar;
