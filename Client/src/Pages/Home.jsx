import Header from "../Components/Header";
import BackgroundVideo from "../Components/Background";
import LargestTileStore from "../Components/LargestTileStore";
import ProductShowcase from "../Components/ProductShowCase";
import FeaturesSection from "../Components/FeaturesSection";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";
const Home = () => {
    return (
        <div className="homepage">
            <Header />
            <BackgroundVideo />
            <LargestTileStore />
            <ProductShowcase />
            <FeaturesSection />
            <Faqs />
            <Footer />
        </div>
    );
};

export default Home;
