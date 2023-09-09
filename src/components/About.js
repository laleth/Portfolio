import React from 'react';
import '../style/About.css';
import resumePDF from '../Resume/My Resume.pdf'; // Update with the actual path to your PDF file

function About() {
  const handleDownloadResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div className="about-container">
      <section className="about-intro">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with expertise in HTML, CSS, JavaScript, and React.js. ...
        </p>
      </section>

      <section className="about-skills">
        <h2>Skills</h2>
        <ul>
          <li>Frontend Development</li>
          <li>UI/UX Design</li>
          <li>Responsive Web Design</li>
          <li>MainFrame Development</li>
          <li>IBM DB2</li>
        </ul>
      </section>

      <section className="about-projects">
        <h2>My Projects</h2>
        <div className="project">
          <h4>PeopleSoft</h4>
          <p>
            The PeopleSoft Application which handles the customers' purchasing details, travel and expense, and asset details which work under mainframe and Peoplecode.
          </p>
        </div>
        <div className="project">
          <h4>Waycart</h4>
          <p>
            The Waycart Application which is similar to an online shopping platform developed under React, providing customer doorstep delivery of products.
          </p>
        </div>
      </section>

      <section className="resume-download">
        <button className="download-button" onClick={handleDownloadResume}>
          Download Resume (PDF)
        </button>
      </section>
    </div>
  );
}

export default About;
