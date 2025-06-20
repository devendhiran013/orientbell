import { useState } from "react";
import "../Styles/Faqs.css"; 

const faqData = [
  {
    question: "What types of tiles do you offer?",
    answer:
      "We offer a wide variety of tiles including ceramic, porcelain, vitrified, marble, and mosaic tiles suitable for both residential and commercial spaces.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes, we provide fast and safe home delivery services across multiple cities. Delivery charges may vary based on location.",
  },
  {
    question: "Can I see a sample before purchasing?",
    answer:
      "Absolutely! You can request a tile sample through our website or visit our physical store to view and feel the tiles before placing an order.",
  },
  {
    question: "Do you offer tile installation services?",
    answer:
      "Yes, we offer professional tile installation services. Our team ensures perfect fitting and finishing for your tile needs.",
  },
];

const Faqs = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQs</h2>
          <h2 className="faq-title">Answer</h2>
        </div>

        <div className="faq-content">
          <div className="faq-questions">
            {faqData.map((faq, index) => (
              <button
                key={index}
                className={`faq-button ${
                  selectedQuestionIndex === index ? "selected" : ""
                }`}
                onClick={() => setSelectedQuestionIndex(index)}
              >
                {faq.question}
              </button>
            ))}
          </div>

          <div className="faq-answer-box">
            <div className="faq-answer">
              {selectedQuestionIndex !== null ? (
                <p>{faqData[selectedQuestionIndex].answer}</p>
              ) : (
                <p>Select a question to see the answer.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
