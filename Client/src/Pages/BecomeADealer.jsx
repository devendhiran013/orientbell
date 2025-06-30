import React, { useState } from 'react';
import { FaBuilding, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import Header from '../Components/Header';
import Faqs from '../Components/Faqs';
import Footer from '../Components/Footer';
import '../Styles/BecomeADealer.css';
import Select from "react-select";

const BecomeADealer = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: 'India',
        pincode: '',
        businessType: '',
        interestedProducts: '',
        annualTurnover: '',
        experience: '',
        message: ''
    });

    const businessTypes = [
        'Retailer',
        'Wholesaler',
        'Distributor',
        'Contractor',
        'Architect',
        'Interior Designer',
        'Other'
    ];

    const productCategories = [
        'Floor Tiles',
        'Wall Tiles',
        'Sanitaryware',
        'Bath Fittings',
        'Kitchen Solutions',
        'All Products'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/dealer-application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setSubmitted(true);
                setFormData({ // clear form
                    companyName: '',
                    contactPerson: '',
                    phone: '',
                    email: '',
                    address: '',
                    city: '',
                    state: '',
                    country: 'India',
                    pincode: '',
                    businessType: '',
                    interestedProducts: '',
                    annualTurnover: '',
                    experience: '',
                    message: ''
                });
            } else {
                setSubmitted(false);
            }
        } catch (err) {
            console.error('Submit error:', err);
            alert('Failed to submit application');
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
        <div className="dealer-page">
            <Header />
            <div className="dealer-hero">
                <div className="hero-content">
                    <h1>Become Our Dealer</h1>
                    <p>Join our network of trusted partners and grow your business with our premium products</p>
                </div>
            </div>

            <div className="dealer-container">
                <div className="dealer-benefits">
                    <h2>Why Partner With Us?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🏆</div>
                            <h3>Premium Products</h3>
                            <p>Access to our high-quality, innovative product range</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">📈</div>
                            <h3>Business Growth</h3>
                            <p>Marketing support and sales tools to help you grow</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🤝</div>
                            <h3>Exclusive Terms</h3>
                            <p>Competitive margins and dealer incentives</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎓</div>
                            <h3>Training</h3>
                            <p>Product knowledge and sales training programs</p>
                        </div>
                    </div>
                </div>

                <div className="dealer-form-section">
                    <div className="form-intro">
                        <h2>Dealer Application Form</h2>
                        <p>Fill out the form below and our team will contact you within 48 hours</p>
                    </div>

                    <form onSubmit={handleSubmit} className="dealer-form">
                        <div className="form-section">
                            <h3><FaBuilding /> Company Information</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="businessType">Business Type *</label>
                                    <select
                                        id="businessType"
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Business Type</option>
                                        {businessTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <FaChevronDown className="select-arrow" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="annualTurnover">Annual Turnover (₹) *</label>
                                    <input
                                        type="text"
                                        id="annualTurnover"
                                        name="annualTurnover"
                                        value={formData.annualTurnover}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="experience">Years in Business *</label>
                                    <input
                                        type="number"
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><FaUser /> Contact Information</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contactPerson">Contact Person *</label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
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
                                    <label htmlFor="interestedProducts">Interested Products *</label>
                                    <select
                                        id="interestedProducts"
                                        name="interestedProducts"
                                        value={formData.interestedProducts}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Product Category</option>
                                        {productCategories.map((product, index) => (
                                            <option key={index} value={product}>{product}</option>
                                        ))}
                                    </select>
                                    <FaChevronDown className="select-arrow" />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><FaMapMarkerAlt /> Address Information</h3>
                            <div className="form-group">
                                <label htmlFor="address">Business Address *</label>
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
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State *</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
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
                                <div className="form-group">
                                    <label htmlFor="pincode">Pincode *</label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <div className="form-group">
                                <label htmlFor="message">Additional Information</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your business and why you want to partner with us..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="submit-btn">
                                Submit Application
                            </button>
                            <p className="form-note">
                                By submitting this form, you agree to our Terms and Conditions and Privacy Policy.
                            </p>
                            {submitted && (
                                <p className="confirmation-message"><b>Our Team will Contact you soon...</b></p>
                            )}

                        </div>
                    </form>
                </div>
            </div>
            <Faqs />
            <Footer />
        </div>
    );
};

export default BecomeADealer;