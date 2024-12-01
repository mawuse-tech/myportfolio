import React from "react";
import { motion } from "framer-motion";
import sn1 from "../assets/images/screen7.png";
import sn2 from "../assets/images/screen1.png";
import sn3 from "../assets/images/screen2.png";
import sn4 from "../assets/images/screen4.png";
import sn5 from "../assets/images/screen3.png";
import sn6 from "../assets/images/sreen6.png";

function MyWork() {
  // Unique titles and descriptions for each image
  const workDetails = [
    {
      title: "A Rental Web App",
      description: "A web application that connects house owners and prospective tenants.",
      image: sn1,
      link: "https://renteaze.netlify.app/",
    },
    {
      title: "An Advertising Web App",
      description: "A web application that connects advertisers and potential customers.",
      image: sn2,
      link: "https://advert-app.netlify.app/",
    },
    {
      title: "A Library Web App",
      description: "A web application that allows users to borrow and return books.",
      image: sn3,
      link: "https://trailblaze-library.netlify.app/",
    },
    {
      title: "A movie website",
      description: "A web application that allows users to search for movies and view details.",
      image: sn4,
      link: "https://example.com/project4",
    },
    {
      title: "A fashion website",
      description: "A web application that allows users to browse and purchase fashion items.",
      image: sn5,
      link: "https://example.com/project5",
    },
    {
      title: "A portfolio website",
      description: "A web application that showcases my projects and skills.",
      image: sn6,
      link: "https://example.com/project6",
    },
  ];

  // Updated animation variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1  // Reduced stagger time
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },  // Reduced initial y offset
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const pageTransition = {
    initial: { opacity: 0 },  // Removed x translation for a simpler fade
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <motion.div
      {...pageTransition}
      className="flex flex-col items-center font-mono"
    >
      {/* Updated title animation */}
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center text-black"
        initial={{ opacity: 0, y: -20 }}  // Reduced y offset
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        MY WORK
      </motion.h1>

      {/* Grid container with animation */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workDetails.map((work, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={work.image}
              alt={`work-${index + 1}`}
              className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              style={{ width: "100%", height: "250px" }} // Sets a consistent height
            />

            {/* Text Section */}
            <div className="p-4 text-center">
              <p className="text-black font-semibold">{work.title}</p>
              <p className="text-gray-600 text-sm mb-2">{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-pink-700 hover:text-pink-600 transition-colors duration-300 text-sm"
              >
                view project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MyWork;
