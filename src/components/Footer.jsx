import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <p>Shankar Vinayaka Reddy © 2024. All rights are reserved</p>
        <div className="profile-links">
          <a href="https://github.com/Shankar-Vinayaka-Reddy-8/">
            <i class="fa-brands fa-github"><FontAwesomeIcon icon={faGithub} /></i>
          </a>
          <a href="https://www.linkedin.com/in/nandi-mohan-shankar-vinayaka-reddy/">
            <i class="fa-brands fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
