import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>
        <div className="all-projects">
          <div className="project-reverse">
            <div className="project-text">
              <h3>IMDB clone</h3>
              <p className="project-desc">
                Explore movies, share reviews, and curate lists on MovieHub, a
                React app inspired by IMDb. Enjoy personalized recommendations
                and connect with fellow enthusiasts in a secure, user-friendly
                interface. Your go-to platform for an immersive movie
                experience.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>TMDB Api</p>
                <p>JavaScript</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Shankar-Vinayaka-Reddy-8/IMDB-clone"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://65b8db67c6c2f8d17ebb11e4--imdb-clone-0.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https:///" target="_blank">
                <img src="assets/Socialife.png" alt="social-media-app" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="https:///" target="_blank">
                <img src="assets/Motorbike Rental.png" alt="motor-rental" />
              </a>
            </div>
            <div className="project-text">
              <h3>RX RENTAL</h3>
              <p className="project-desc">
                A motorbike rental website is an online platform that allows
                users to rent motorbikes for personal or business use. The
                website provides an interface for searching, comparing, and
                reserving cars.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Shankar-Vinayaka-Reddy-8/Rx-Rentals"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://65b8cc006a1a57c82a19f2cb--rx-rentals.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3></h3>
              <p className="project-desc">
                Embark on a virtual culinary journey with IndianPalate, a React
                app showcasing the best of Indian cuisine. Explore a menu filled
                with flavorful curries, aromatic spices, and delectable sweets.
                Experience the essence of India through captivating visuals and
                easy navigation. From classics to contemporary, indulge in the
                richness of Indian flavors, all at your fingertips.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shankar-Vinayaka-Reddy-8/Restaurant-website?tab=readme-ov-file" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://65b8de56b0e7d0d65b4d12e4--indian-taste.netlify.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://fitp/" target="_blank">
                <img src="assets/Fitfinity.png" alt="fitfinity-gym-center" />
              </a>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
