import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaPaperPlane } from 'react-icons/fa';
import '../Styles/TalkWithExperts.css';

const TalkWithExperts = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    pincode: '',
    location: '',
    roomType: 'kitchen'
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/expert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          email: '',
          phone: '',
          address: '',
          pincode: '',
          location: '',
          roomType: ''
        });
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="experts-container">
      <div className="experts-content">
        <div className="form-section">
          <h1 className="experts-heading">
            <span className="highlight">Talk</span> with Experts
          </h1>
          <p className="experts-subheading">Get personalized design solutions for your space</p>

          <form onSubmit={handleSubmit} className="experts-form">
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone className="input-icon" />
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">
                <FaHome className="input-icon" />
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="roomType">
                <FaMapMarkerAlt className="input-icon" />
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
              >
                <option value="kitchen">Kitchen</option>
                <option value="living room">Living Room</option>
                <option value="bed room">Bed Room</option>
                <option value="bathroom">Bathroom</option>
                <option value="wall">Wall</option>
                <option value="floor">Floor</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane className="submit-icon" />
              Submit
            </button>

            {/* ✅ Conditionally show message */}
            {isSubmitted && (
              <p className="confirmation-message"><b>Our expert will contact you soon </b></p>
            )}
          </form>
        </div>

        <div className="image-section">
          <div className="image-overlay"></div>
          <div className="image-content">
            <h2>Design Inspiration</h2>
            <p>Let our experts bring your vision to life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkWithExperts;
