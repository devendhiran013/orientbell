import "../Styles/FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Extensive Selection",
      description: "Diverse materials and finishes for complementing any architectural style.",
      image: "https://www.lakshmiceramics.in/wp-content/uploads/2025/02/Extensive-1.webp",
    },
    {
      id: 2,
      title: "Exceptional Quality",
      description: "Each product surpasses industry standards, ensuring long-lasting satisfaction.",
      image: "https://www.lakshmiceramics.in/wp-content/uploads/2025/02/Exceptional.webp",
    },
    {
      id: 3,
      title: "Trusted Partnership",
      description: "Committed to excellence, our inventory is handpicked from leading global brands.",
      image: "https://www.lakshmiceramics.in/wp-content/uploads/2025/02/Trusted.webp",
    },
    {
      id: 4,
      title: "Designed For Everyone",
      description: "The preferred choice for homeowners, architects and designers alike.",
      image: "https://www.lakshmiceramics.in/wp-content/uploads/2025/02/Designed.webp",

    },
    {
      id: 5,
      title: "Customer-Centric Focus",
      description: "Finest items delivered at an affordable price, with our expert team to guide you.",
      image: "https://www.lakshmiceramics.in/wp-content/uploads/2025/02/Customer-Centric.webp",
    },
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "everyone":
        return (
          <div className="icon-everyone">
            <div className="person person-1"></div>
            <div className="person person-2"></div>
            <div className="person person-3"></div>
          </div>
        );
      case "focus":
        return (
          <div className="icon-focus">
            <div className="magnifying-glass">
              <div className="lens"></div>
              <div className="handle"></div>
            </div>
            <div className="people-group">
              <div className="person-small person-1"></div>
              <div className="person-small person-2"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon">
              {feature.image ? (
                <img src={feature.image} alt={feature.title} className="feature-image" />
              ) : (
                renderIcon(feature.image)
              )}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            {index < features.length - 1 && <div className="feature-divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
