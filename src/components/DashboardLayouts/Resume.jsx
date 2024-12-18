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
    <div className="min-h-screen p-2 sm:p-8 bg-gradient-to-br from-pink-100 via-white to-pink-100">
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-pink-800 text-center">Resume</h1>

          {/* Summary Section */}
          <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
              Summary
            </h2>
            <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm">
              <p className="text-base sm:text-lg leading-relaxed">
                Highly motivated and detail-oriented junior web developer with experience in building responsive and user-friendly applications. Proficient in HTML, CSS, and JavaScript with a passion for continuous learning and improvement.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
              Skills
            </h2>
            <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm">
              <ul className="grid grid-cols-1 gap-3 text-base sm:text-lg">
                {['Languages: HTML | CSS | JavaScript',
                  'Frameworks: React',
                  'Other: Git, Netlify'].map((skill, index) => (
                  <li key={index} 
                      className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 hover:bg-pink-50 p-2 rounded">
                    <span className="text-pink-600 animate-bounce">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-6 sm:mb-10 transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
              Experience
            </h2>
            <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm space-y-6 sm:space-y-8">
              {/* Experience - one */}
              <div className="transform transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-pink-800">Mest Africa (2024)</h3>
                <ul className="mt-3 space-y-2 text-base sm:text-lg">
                  {['Designed and developed a responsive portfolio website using React, Tailwind CSS to showcase projects and skills.',
                    'Collaborated with a backend developer to build a rental web app that connects house owners and prospective tenants',
                    'Collaborated with a team to design and develop an advertising web application using React and Tailwind CSS.',
                    'Solo project for a software engineering course.'].map((item, index) => (
                    <li key={index} 
                        className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}>
                      <span className="text-pink-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience - two */}
              <div className="transform transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-pink-800">
                  Nanti Systems | National Service Personnel | 2022-2023
                </h3>
                <ul className="mt-3 space-y-2 text-base sm:text-lg">
                  {['Assisted in software development projects.',
                    'Assisted in technical support to clients.',
                    'Collaborated with cross-functional teams on various projects.',
                    'Contributed in problem-solving sessions.'].map((item, index) => (
                    <li key={index} 
                        className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}>
                      <span className="text-pink-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4">
              Education
            </h2>
            <div className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm">
              <p className="text-base sm:text-lg">BA Information Studies</p>
              <p className="text-pink-700 text-base sm:text-lg">University of Ghana, Ghana</p>
              <p className="text-gray-600 text-base sm:text-lg">Graduated: 2022</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
