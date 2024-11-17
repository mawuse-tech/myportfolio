import React from 'react';

function Resume() {
  return (
    <div className="bg-white text-pink-800 p-8 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>

      {/* Summary Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Summary</h2>
        <p className="text-lg">
          Highly motivated and detail-oriented junior web developer with experience in building responsive and user-friendly applications. Proficient in HTML, CSS, and JavaScript with a passion for continuous learning and improvement.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Languages: HTML | CSS | JavaScript</li>
          <li>Frameworks: React</li>
          <li>Other: Git, Netlify</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Experience</h2>

        {/* Experience - one */}
        <div className="mb-6">
          <h3 className="text-xl font-bold">Mest Africa (2024)</h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-lg">
            <li>Built a library web app with an API.</li>
            <li>Built an apartment rental app with an API.</li>
            <li>Built an Advert App with an API.</li>
            <li>Solo project for a software engineering course.</li>
            <li>Built a portfolio website.</li>
          </ul>
        </div>

        {/* Experience - two */}
        <div>
          <h3 className="text-xl font-bold">Nanti Systems | National Service Personnel | 2022-2023</h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-lg">
            <li>Assisted in software development projects.</li>
            <li>Assisted in technical support to clients.</li>
            <li>Collaborated with cross-functional teams on various projects.</li>
            <li>Contributed in problem-solving sessions.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Education</h2>
        <p className="text-lg">BA Information Studies, Graduated: 2022, University of Ghana, Ghana</p>
      </section>
    </div>
  );
}

export default Resume;
