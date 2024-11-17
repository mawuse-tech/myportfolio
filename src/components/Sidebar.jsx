import React from 'react';

function Sidebar() {
  return (
    <div className="bg-[#242424] text-white h-full p-6 font-mono">
      <h2 className="text-2xl font-bold mb-8">Portfolio Sidebar</h2>
      <ul className="space-y-6">
        <li className="text-lg hover:text-pink-600 cursor-pointer">
          Resume
        </li>
        <li className="text-lg hover:text-pink-600 cursor-pointer">
          Links
        </li>
        <li className="text-lg hover:text-pink-600 cursor-pointer">
          Contact Information
        </li>
        <li className="text-lg hover:text-pink-600 cursor-pointer">
          Projects
        </li>
        <li className="text-lg hover:text-pink-600 cursor-pointer">
          Skills
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
