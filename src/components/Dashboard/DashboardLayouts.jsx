import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main content with Sidebar and Outlet */}
      <div className="flex flex-1 justify-center">
        {/* Sidebar (fixed on the left) */}
        <div className="flex-none">
          <Sidebar />
        </div>

        {/* Outlet for main content */}
        <div className="flex-1 flex justify-center items-center ">
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
