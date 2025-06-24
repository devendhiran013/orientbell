import React from 'react';
import Header from '../Components/Header';
import TileCarousel from '../Components/TileCarousel';
import Footer from '../Components/Footer';
import { FaAward, FaShieldAlt, FaLeaf, FaUsers, FaBuilding } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import "../Styles/AboutUs.css"
const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <Header />
      <TileCarousel />
      

      {/* Company Overview */}
      <div className="section overview">
        <div className="container">
          <div className="overview-content">
            <h2>Our Legacy</h2>
            <p>
              Orientbell Tiles is India’s leading tile manufacturer, renowned for superior quality,
              innovative designs, and unmatched craftsmanship. With over four decades of expertise,
              we have redefined interior and exterior spaces with premium tiles that blend aesthetics
              with durability.
            </p>
            <div className="stats">
              <div className="stat-item">
                <FaBuilding className="stat-icon" />
                <h3>40+ Years</h3>
                <p>of Excellence</p>
              </div>
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <h3>5000+</h3>
                <p>Dealers & Retailers</p>
              </div>
              <div className="stat-item">
                <GiModernCity className="stat-icon" />
                <h3>50+ Countries</h3>
                <p>Worldwide Presence</p>
              </div>
            </div>
          </div>
          <div className="overview-image">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Orientbell Tiles Showroom"
            />
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="section mission-vision">
        <div className="container">
          <div className="mission">
            <h2><FaLeaf /> Our Mission</h2>
            <p>
              To revolutionize interior spaces by offering high-quality, sustainable, and
              aesthetically pleasing tiles that enhance lifestyles while maintaining
              environmental responsibility.
            </p>
          </div>
          <div className="vision">
            <h2><FaShieldAlt /> Our Vision</h2>
            <p>
              To be the most trusted and innovative tile brand globally, inspiring beautiful
              living spaces through cutting-edge design and superior craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="section why-choose-us">
        <h2>Why Choose Orientbell Tiles?</h2>
        <div className="features">
          <div className="feature-card">
            <FaAward className="feature-icon" />
            <h3>Premium Quality</h3>
            <p>Manufactured with advanced technology for unmatched durability.</p>
          </div>
          <div className="feature-card">
            <RiCustomerService2Fill className="feature-icon" />
            <h3>Customer-Centric</h3>
            <p>Dedicated support and after-sales service.</p>
          </div>
          <div className="feature-card">
            <FaLeaf className="feature-icon" />
            <h3>Eco-Friendly</h3>
            <p>Sustainable production with minimal environmental impact.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              "Orientbell tiles transformed my home! The quality and designs are exceptional."
            </p>
            <h4>- Rajesh Kumar, Homeowner</h4>
          </div>
          <div className="testimonial">
            <p>
              "As a contractor, I trust Orientbell for premium tiles that last for decades."
            </p>
            <h4>- Priya Sharma, Interior Designer</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;