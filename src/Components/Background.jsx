import React from 'react';
import '../Styles/Background.css';
import backgroundVideo from '../assests/Background.mp4';
const BackgroundVideo = () => (
  <div className="hero video-hero">
    <div className="video-wrap">
      <video
        id="video-bg"
        autoPlay
        loop
        muted
        playsInline
        poster="YOUR_POSTER_URL"
      >
        <source src={backgroundVideo} type="video/mp4" />
        <source src={backgroundVideo} type="video/webm" />
      </video>
      <div className="gradient-overlay" />
    </div>
    {/* overlay content */}
  </div>
);

export default BackgroundVideo;
