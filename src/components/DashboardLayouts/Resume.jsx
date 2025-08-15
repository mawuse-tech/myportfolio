import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function Resume() {
  const resumeRef = useRef(null);

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
   <div className="min-h-screen p-2 sm:p-8">
  {/* Download Button */}
  <div className="container mx-auto px-2 sm:px-4 mb-4">
    <button
      onClick={downloadPDF}
      className="float-right bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base"
    >
      Download Resume
    </button>
  </div>

  {/* Resume Content */}
  <div ref={resumeRef} className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
    <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/80 rounded-xl shadow-lg p-4 sm:p-8 border border-pink-100">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-pink-800 text-center">
        Resume
      </h1>

      {/* Summary */}
      <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
          Summary
        </h2>
        <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm">
          <p className="text-base sm:text-lg leading-relaxed">
            Creative and detail-oriented full-stack web developer with a passion for building responsive, user-friendly, and scalable web applications. Experienced in both front-end and back-end development, with a strong focus on solving real-world problems through clean code and practical solutions. Known for turning design concepts into functional products, working effectively in team environments, and continuously improving through learning and experimentation. Eager to contribute to meaningful digital experiences in fast-paced tech environments.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
          Skills
        </h2>
        <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm">
          <ul className="grid grid-cols-1 gap-3 text-base sm:text-lg">
            {[
              'Technical: HTML, CSS (Tailwind, Bootstrap), JavaScript, React, Node.js, Express.js, EJS, MongoDB, SQL, Mongoose, Git, GitHub, Netlify',
              'Soft Skills: Team collaboration, Adaptability & Willingness to Learn, Client Interaction & Feedback Handling, Attention to Detail'
            ].map((skill, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 hover:bg-pink-50 p-2 rounded"
              >
                <span className="text-pink-600 animate-bounce">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
          Experience
        </h2>
        <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm space-y-6 sm:space-y-8">

          {/* Developers in Vogue */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-800">
              Developers in Vogue | Trainee (2025)
            </h3>
            <ul className="mt-3 space-y-2 text-base sm:text-lg">
              {[
                'Built and deployed multiple projects, including:',
                'Employee Management System - A CRUD-based web application using Node.js, Express.js, and MongoDB.',
                'Blog Platform - A content management app built with EJS templates and Express.js.',
                'Talk to a Sister - Collaborated with a colleague to build a platform connecting young women with professionals.'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ABSA Digital Skills */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-800">
              Digital Skills Expert – Young African Works Program, ABSA (2024-2025)
            </h3>
            <ul className="mt-3 space-y-2 text-base sm:text-lg">
              {[
                'Selected to participate in a youth-focused digital skills initiative to support African startups with modern web solutions.',
                'Designed and developed two startup websites, including an e-commerce platform using React, JavaScript, and Tailwind CSS.',
                'Collaborated closely with startup founders to transform business goals into user-friendly websites.',
                'Gained experience in client communication, agile development, and deployment.'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MEST Africa */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-800">
              MEST Africa | Trainee (2024)
            </h3>
            <ul className="mt-3 space-y-2 text-base sm:text-lg">
              {[
                'Designed and developed a responsive portfolio website using React and Tailwind CSS.',
                'Collaborated with a backend developer to build a rental web app.',
                'Worked with a team to design and develop an advertising web application.'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nanti Systems */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-800">
              Nanti Systems | National Service Personnel (2023)
            </h3>
            <ul className="mt-3 space-y-2 text-base sm:text-lg">
              {[
                'Assisted in software development projects.',
                'Provided technical support to clients.',
                'Contributed in problem-solving sessions.'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
          Projects
        </h2>
        <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm">
          <ul className="space-y-3 text-base sm:text-lg">
            {[
              'Rental Web App - A platform for property listings and tenant connections, built with React and Tailwind CSS.',
              'E-commerce Store - Fully responsive online shop with cart functionality, built with React and Tailwind.'
            ].map((project, index) => (
              <li key={index} className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                <span className="text-pink-600 mt-1">•</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
          Education
        </h2>
        <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm space-y-2">
          <p className="text-base sm:text-lg">Software Engineering Certificate - Developers in Vogue (2025)</p>
          <p className="text-base sm:text-lg">Web Development Certificate – MEST Africa (2024)</p>
          <p className="text-base sm:text-lg">BA Information Studies – University of Ghana (2022)</p>
        </div>
      </section>

      {/* Referee */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
          Referee
        </h2>
        <p className="text-base sm:text-lg">Available upon request.</p>
      </section>
    </div>
  </div>
</div>

  );
}

export default Resume;
