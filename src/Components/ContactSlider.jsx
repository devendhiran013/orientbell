import React from 'react';
import '../Styles/ContactSlider.css'; // Optional for custom styles

const ContactSlider = () => {
  return (
    <div className="contact-slider-container">
      <div className="slider-wrapper">
        <div className="slide" role="group" aria-label="1 of 1" aria-roledescription="slide">
          <div className="slide-background" />
          <div className="slide-content">
            <h1 className="slide-title">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;
