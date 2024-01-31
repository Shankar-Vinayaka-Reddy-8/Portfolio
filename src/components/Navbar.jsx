import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState("");
  const [nav, setNav] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 10) {
      setNavBg("nav-bg");
    } else {
      setNavBg("");
    }
  };

  const openNav = () => {
    setNav(!nav);
  };

  const scrollToCertification = () => {
    const certificationSection = document.getElementById("certification");
    if (certificationSection) {
      certificationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className={`navbar ${navBg}`}>
          <div className="navbar_logo">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <h1>Coder</h1>
            </a>
          </div>

          <ul className="navbar__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a onClick={scrollToCertification} href="#certification">
                Certification
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div className="mobile-navbar-close" onClick={openNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => {openNav(); scrollToCertification();}} href="#certification">
                Certification
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
