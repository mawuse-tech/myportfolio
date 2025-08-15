import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion';

function Sidebar() {
  return (
    <div className="bg-[#242424] text-white h-full p-6 font-mono flex flex-col">
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
          <NavLink to="/dashboard"
            end
            className={({ isActive }) =>
              `p-3 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"
              }`
            }
          >Resume</NavLink>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <NavLink to="/dashboard/mywork"
            className={({ isActive }) =>
              `p-3 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"
              }`
            }
          >My Projects</NavLink>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <NavLink to="/dashboard/contact"

            className={({ isActive }) =>
              `p-3 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"
              }`
            }
          >Contact</NavLink>
        </motion.li>
        <motion.li
          className="text-lg hover:text-pink-600 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >

          <NavLink to="/dashboard/fun"
            
            className={({ isActive }) =>
              `p-3 rounded flex items-center gap-2 ${isActive ? "bg-white text-black" : "text-white"
              }`
            }
          >Fun things I do</NavLink>
        </motion.li>
      </motion.ul>

      <motion.div
        className="mt-auto aspect-square w-48 relative group overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500  to-pink-600 
          animate-gradient group-hover:scale-110 transition-transform duration-500" />

        <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 transform group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <span className="text-center font-medium text-base whitespace-nowrap group-hover:scale-110 transition-transform duration-500">
            Let's Create Magic!
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
