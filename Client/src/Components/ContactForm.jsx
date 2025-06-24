import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../Styles/ContactForm.css';
import Select from "react-select";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        country: '',
        state: '',
        city: '',
        subject: 'Others',
        email: '',
        message: '',
        agreeToPolicy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitted(true);
            setFormData({
                fullName: '',
                contactNumber: '',
                country: '',
                state: '',
                city: '',
                subject: 'Others',
                email: '',
                message: '',
                agreeToPolicy: false
            });
        } else {
            setSubmitted(false);
        }
    };

    const countries = [
        { label: "India", value: "India", code: "in" },
        { label: "United States", value: "United States", code: "us" },
        { label: "United Kingdom", value: "United Kingdom", code: "gb" },
        { label: "Canada", value: "Canada", code: "ca" },
        { label: "Australia", value: "Australia", code: "au" },
        { label: "Germany", value: "Germany", code: "de" },
        { label: "France", value: "France", code: "fr" },
        { label: "Japan", value: "Japan", code: "jp" },
        { label: "China", value: "China", code: "cn" },
        { label: "Brazil", value: "Brazil", code: "br" },
        { label: "Italy", value: "Italy", code: "it" },
        { label: "South Korea", value: "South Korea", code: "kr" },
        { label: "Russia", value: "Russia", code: "ru" },
        { label: "United Arab Emirates", value: "United Arab Emirates", code: "ae" },
        { label: "Singapore", value: "Singapore", code: "sg" },
    ];

    // Custom single value + option rendering
    const customSingleValue = ({ data }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
            <img
                src={`https://flagcdn.com/w20/${data.code}.png`}
                alt=""
                style={{ marginRight: 8 }}
            />
            {data.label}
        </div>
    );

    const customOption = (props) => {
        const { data, innerRef, innerProps } = props;
        return (
            <div ref={innerRef} {...innerProps} style={{ display: "flex", alignItems: "center", padding: "5px 10px" }}>
                <img
                    src={`https://flagcdn.com/w20/${data.code}.png`}
                    alt=""
                    style={{ marginRight: 8 }}
                />
                {data.label}
            </div>
        );
    };


    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="info-section">
                    <h1 className="info-heading">We are happy to answer your questions.</h1>

                    <div className="contact-info">
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h3>Store Address</h3>
                                <p>123 Design Street, Creative District<br />Mumbai, Maharashtra 400001</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <h3>Phone Number</h3>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <p>info@orientbell.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h2 className="form-heading">Leave your details & we'll connect with you...</h2>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <Select
                                id="country"
                                name="country"
                                options={countries}
                                value={countries.find(c => c.value === formData.country)}
                                onChange={(selectedOption) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        country: selectedOption.value,
                                    }))
                                }
                                components={{ SingleValue: customSingleValue, Option: customOption }}
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        border: state.isFocused ? '2px solid rgb(250, 204, 21)' : '2px solid #ddd',
                                        boxShadow: state.isFocused ? '0 0 0 2px rgba(250, 204, 21, 0.2)' : 'none',
                                        '&:hover': {
                                            borderColor: 'rgb(250, 204, 21)',
                                        },
                                        outline: 'none',
                                        backgroundColor: '#f8f8f8',
                                        borderRadius: '8px',
                                        minHeight: '45px',
                                        padding: '2px 4px',
                                    }),
                                    option: (base, state) => ({
                                        ...base,
                                        backgroundColor: state.isSelected
                                            ? 'rgb(250, 204, 21)'
                                            : state.isFocused
                                                ? '#f6f6f6'
                                                : 'white',
                                        color: 'black',
                                        padding: '10px 15px',
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }),
                                }}
                            />


                        </div>





                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="Others">Others</option>
                                    <option value="Product Inquiry">Product Inquiry</option>
                                    <option value="Order Status">Order Status</option>
                                    <option value="Complaint">Complaint</option>
                                    <option value="Feedback">Feedback</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="agreeToPolicy"
                                name="agreeToPolicy"
                                checked={formData.agreeToPolicy}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeToPolicy">I abide by the Orientbell Privacy Policy</label>
                        </div>

                        <button type="submit" className="submit-btn">
                            <FaPaperPlane className="submit-icon" />
                            Send
                        </button>

                        {/* ✅ Show confirmation message after submission */}
                        {submitted && (
                            <p className="success-message"><b>We will reach you out soon...</b></p>
                        )}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;