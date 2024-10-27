import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterestP, faLinkedinIn, faInstagram, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#242424] text-white py-10 px-4 text-center">
      <h1 className="text-lg md:text-xl font-bold mb-4">Let Me Get You A Beautiful Website</h1>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-8">
        <span className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center items-center transition duration-300">
          <FontAwesomeIcon icon={faPinterestP} className="text-white text-xl" />
        </span>
        <span className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center items-center transition duration-300">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-xl" />
        </span>
        <span className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center items-center transition duration-300">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
        </span>
        <span className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center items-center transition duration-300">
          <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl" />
        </span>
        <span className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center items-center transition duration-300">
          <FontAwesomeIcon icon={faXTwitter} className="text-white text-xl" />
        </span>
      </div>

      {/* Contact Information */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Mawuse Akpeke</h2>
        <p className="text-gray-300">akpekemawuse1@gmail.com</p>
        <p className="text-gray-400">
          221B Baker Street, Post office Box 353, Park Road, USA - 215431
        </p>
      </div>
    </footer>
  );
}

export default Footer;
