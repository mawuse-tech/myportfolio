import React from 'react';

function Resume() {
  return (
    <div className="bg-gradient-to-br from-white to-pink-50 text-gray-800 p-8 min-h-screen font-mono animate-fadeIn">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 border border-pink-100 animate-slideDown">
        <h1 className="text-4xl font-bold mb-8 text-pink-800 text-center animate-pulse">Resume</h1>

        {/* Summary Section */}
        <section className="mb-10 animate-slideInLeft">
          <h2 className="text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4 hover:scale-105 transition-transform">
            Summary
          </h2>
          <p className="text-lg leading-relaxed hover:bg-pink-50 p-4 rounded-lg transition-all duration-300">
            Highly motivated and detail-oriented junior web developer with experience in building responsive and user-friendly applications. Proficient in HTML, CSS, and JavaScript with a passion for continuous learning and improvement.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-10 animate-slideInRight">
          <h2 className="text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4 hover:scale-105 transition-transform">
            Skills
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
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
        </section>

        {/* Experience Section */}
        <section className="mb-10 animate-slideInLeft">
          <h2 className="text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4 hover:scale-105 transition-transform">
            Experience
          </h2>

          {/* Experience - one */}
          <div className="mb-8 hover:bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-pink-800">Mest Africa (2024)</h3>
            <ul className="mt-3 space-y-2 text-lg">
              {['Built a library web app with an API.',
                'Built an apartment rental app with an API.',
                'Built an Advert App with an API.',
                'Solo project for a software engineering course.',
                'Built a portfolio website.'].map((item, index) => (
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
          <div className="hover:bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-pink-800">
              Nanti Systems | National Service Personnel | 2022-2023
            </h3>
            <ul className="mt-3 space-y-2 text-lg">
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
        </section>

        {/* Education Section */}
        <section className="animate-slideInRight">
          <h2 className="text-2xl font-semibold text-pink-700 border-b-2 border-pink-200 pb-2 mb-4 hover:scale-105 transition-transform">
            Education
          </h2>
          <div className="text-lg p-4 hover:bg-pink-50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <p>BA Information Studies</p>
            <p className="text-pink-700">University of Ghana, Ghana</p>
            <p className="text-gray-600">Graduated: 2022</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
