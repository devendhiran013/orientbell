import React, { useState } from "react";
import "../Styles/LargestTileStore.css";
import { Link, useNavigate } from "react-router-dom";
const LargestTileStore = () => {
  const [showStoryMessage, setShowStoryMessage] = useState(false);

  const handleStoryClick = (e) => {
    e.preventDefault(); // prevent page navigation
    setShowStoryMessage(!showStoryMessage);
  };

  return (
    <section className="largest-tile-store">
      <div className="tile-store-container">
        <div className="tile-store-image fadeInUp">
          <img
            src="https://sdmntprwestus.oaiusercontent.com/files/00000000-8600-6230-a511-78ce9e3d9e30/raw?se=2025-06-20T16%3A24%3A04Z&sp=r&sv=2024-08-04&sr=b&scid=fafcee67-ad23-5fa0-8a67-d87806b63fd9&skoid=7399a3a4-0259-4d43-bcd6-a56ceeb4c28b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-20T15%3A12%3A50Z&ske=2025-06-21T15%3A12%3A50Z&sks=b&skv=2024-08-04&sig=35cAsg5WujTnOZ/%2B5F9VVVG3qmDn52sxx/B7nUHIHS4%3D"
            alt="The Largest Tile Store"
            loading="lazy"
            width="910"
            height="1024"
          />
        </div>

        <div className="tile-store-content fadeInUp">
          <h2>The Largest Tile Store</h2>
          <p>
            Orientbell Tiles opened its doors in 1997 as a modest 400 sq. ft tile store,
            driven by the vision to revolutionise quality standards in every building,
            renovation and design project.
          </p>
          <p>
            Today, we stand tall as the top destination for all your tile, sanitary ware and
            home improvement needs, with a network of 15+ branches and over 15 lakh happy
            customers.
          </p>
          <p>
            Sourced from world-class brands, we bring you only the best in terms of quality,
            style and innovation. For 27 years, we have been committed to help you select the
            ideal products to make your space feel complete and comfortable.
          </p>

          <button className="story-button" onClick={handleStoryClick}>
            <span
              className={`story-icon ${showStoryMessage ? "rotate-down" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F58A1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            <span className="story-text"><Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}> Know Our Story</Link></span>
          </button>


        </div>
      </div>
    </section>
  );
};

export default LargestTileStore;
