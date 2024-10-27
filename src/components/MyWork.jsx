import React from "react";
import sn1 from "../assets/images/screen1.png";
import sn2 from "../assets/images/screen2.png";
import sn3 from "../assets/images/screen3.png";
import sn4 from "../assets/images/screen4.png";
import sn5 from "../assets/images/sreen5.png";
import sn6 from "../assets/images/sreen6.png";

function MyWork() {
  return (
    <div className="flex flex-col items-center my-16 bg-[#242424] font-mono">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-white">MY WORK</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 max-w-6xl">
        {[sn1, sn2, sn3, sn4, sn5, sn6].map((imageSrc, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={imageSrc}
              alt={`work-${index + 1}`}
              className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              style={{ width: "100%", height: "250px" }} // Sets a consistent height
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;
