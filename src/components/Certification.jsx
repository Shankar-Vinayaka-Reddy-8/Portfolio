// Certification.js

import React from "react";

const Certification = () => {
  return (
    <div id="certification" className="certificates">
      <h2>FreeCodeCamp Certifications</h2>
      <div className="certificate-carousel">
        <div className="certificate">
          <img
            src="/assets/ceri1.png"
            alt="Certification 1"
            className="certificate-image"
          />
        </div>
        <div className="certificate">
          <img
            src="/assets/cert2.png"
            alt="Certification 2"
            className="certificate-image"
          />
        </div>
        <div className="certificate">
          <img
            src="/assets/certi3.png"
            alt="Certification 3"
            className="certificate-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
