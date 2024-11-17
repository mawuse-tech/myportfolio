import React from "react";
import sn1 from "../assets/images/screen1.png";
import sn2 from "../assets/images/screen2.png";
import sn3 from "../assets/images/screen3.png";
import sn4 from "../assets/images/screen4.png";
import sn5 from "../assets/images/sreen5.png";
import sn6 from "../assets/images/sreen6.png";

function MyWork() {
  // Unique titles and descriptions for each image
  const workDetails = [
    {
      title: "Modern Web App",
      description: "A sleek web application with responsive design.",
      image: sn1,
    },
    {
      title: "E-commerce Platform",
      description: "An intuitive e-commerce platform for online shopping.",
      image: sn2,
    },
    {
      title: "Portfolio Showcase",
      description: "A personal portfolio to highlight projects and skills.",
      image: sn3,
    },
    {
      title: "Blog Website",
      description: "A blog platform for sharing tech articles and tutorials.",
      image: sn4,
    },
    {
      title: "Landing Page Design",
      description: "A stunning landing page crafted for marketing campaigns.",
      image: sn5,
    },
    {
      title: "Dashboard Interface",
      description: "A user-friendly dashboard with powerful analytics.",
      image: sn6,
    },
  ];

  return (
    <div className="flex flex-col items-center font-mono">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-white">MY WORK</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workDetails.map((work, index) => (
          <div
            key={index}
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
              <p className="text-white font-semibold">{work.title}</p>
              <p className="text-gray-400 text-sm">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;
