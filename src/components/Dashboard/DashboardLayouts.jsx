import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 focus:outline-none"
        >
          {isSidebarOpen ? (
            <FaTimes size={24} /> // Close icon when sidebar is open
          ) : (
            <FaBars size={24} /> // Hamburger icon when sidebar is closed
          )}
        </button>
      </div>

      {/* Main content with Sidebar and Outlet */}
      <div className="flex flex-1 justify-center">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block fixed inset-y-0 left-0 w-64 bg-[#242424] text-pink-800 z-40 md:relative md:translate-x-0 transform transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Outlet for main content */}
        <div className="flex-1 flex justify-center items-center p-4 md:ml-64">
          <div className="w-full max-w-4xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DashboardLayout;
