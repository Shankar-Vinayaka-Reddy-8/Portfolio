import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact"> 
      <div className="container">
        <h1>Contact Me</h1>
        <p>
          Don't be shy! Hit me up
          <i class="fa-regular fa-hand-point-down"></i>
        </p>
        <div className="contact-info">
          <div className="contact-details">
            <img src="assets/mobile.png" />
            <a href="tel:6479161309">+91 6302270641</a>
          </div>
          <div className="contact-details">
            <img src="assets/email.png" />
            <a href="mailto:shankarvinayakareddy8@gmail.com">
            shankarvinayakareddy8@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
