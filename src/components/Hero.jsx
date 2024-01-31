import React from "react";
import TechStack from "./TechStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {

    const downloadResume = () => {
      const resumeLink = document.createElement("a");
      resumeLink.href = "/assets/YourResume.pdf"; // Update with the correct file path or URL
      resumeLink.download = "YourResume.pdf"; // Update with the desired file name
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
    };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1 className="animated-text">
                Front End  <br /> Developer{" "}
                <span>
                  <img src="assets/wave hand.png" alt="wave hand" />
                </span>
              </h1>
              <p className="animated-text">
              Hi, I'm Nandi Mohan Shankar Vinayaka Reddy, a dedicated Frontend Developer with a passion for creating captivating user experiences. Proficient in the latest technologies and frameworks, I specialize in crafting dynamic and responsive web applications.
                <br />
                Feel Free to connect with me.
              </p>
              <button className="download-button" onClick={downloadResume}>
             <b><FontAwesomeIcon icon={faDownload} /></b>  &nbsp; Download Resume
              </button>
              <div className="profile-links">
                <a href="https://github.com/Shankar-Vinayaka-Reddy-8/">
                  <i className="fa-brands fa-github"><FontAwesomeIcon icon={faGithub} /></i>
                </a>
                <a href="https://www.linkedin.com/in/nandi-mohan-shankar-vinayaka-reddy">
                  <i className="fa-brands fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
              </div>
            </div>
            <img
              src="assets/profile.png"
              alt="profile"
              className="profile-image"
            />
          </div>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
