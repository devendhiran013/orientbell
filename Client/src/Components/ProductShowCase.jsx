import React, { useRef, useState } from "react";
import "../Styles/ProductShowCase.css";
import { ChevronRight, ChevronLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

import WallTiles from "../assests/WallTiles.webp";
import FloorTiles from "../assests/FloorTiles.webp";
import SanitaryWares from "../assests/Sanitary-Wares.webp";
import ModularKitchen from "../assests/Modular-kitchen.webp";
import KitchenTableTop from "../assests/Kitchen-table-top.webp";

const products = [
  {
    id: 1,
    title: "Wall Tiles",
    image: WallTiles,
    link: "/products/wall-tiles/",
  },
  {
    id: 2,
    title: "Floor Tiles",
    image: FloorTiles,
    link: "/products/floor-tiles/",
  },
  {
    id: 3,
    title: "Sanitary Wares",
    image: SanitaryWares,
    link: "/products/sanitary-wares/",
  },
  {
    id: 4,
    title: "Kitchen Appliances",
    image: ModularKitchen,
    link: "/product-category/kitchen-appliances/",
  },
  {
    id: 5,
    title: "Kitchen Table Top",
    image: KitchenTableTop,
    link: "/product-category/kitchen-table-top/",
  },
];

const ProductShowCase = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleSlides = 3;
  const totalSlides = products.length;
  const [currentSlideChanged, setCurrentSlideChanged] = useState(false);
  const handleScroll = (direction) => {
    const scrollAmount = 300;
    const track = scrollRef.current;
    const scrollWidth = track.scrollWidth;
    const clientWidth = track.clientWidth;

    if (track) {
      if (direction === "left") {
        if (track.scrollLeft <= 0) {
          track.scrollTo({ left: scrollWidth - clientWidth - 1, behavior: "auto" });
          setCurrentSlide(totalSlides - visibleSlides);
        } else {
          track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
          setCurrentSlide((prev) => Math.max(0, prev - 1));
        }
      } else {
        if (track.scrollLeft + clientWidth >= scrollWidth - 1) {
          track.scrollTo({ left: 0, behavior: "auto" });
          setCurrentSlide(0);
        } else {
          track.scrollBy({ left: scrollAmount, behavior: "smooth" });
          setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - visibleSlides));
        }
      }
    }
  };

  return (
    <section className="product-showcase">
      <div className="card">
        <div className="card-left">
          <h1 className="main-heading">Explore Our Premium<br /> Tiles Collection</h1>
          <p className="description">
            Discover a wide variety of high-quality tiles perfect for enhancing your
            home's interior and exterior spaces. Our tiles combine style, durability,
            and functionality to meet all your design needs.
          </p>
          <Link to="/products" className="cta-button">
            Browse Products <MoveRight className="button-icon" />
          </Link>
        </div>

        <div className="card-right">
          <div className="carousel-track" ref={scrollRef}>
            {[...products, ...products].map((product, index) => (
              <div className="carousel-slide" key={`${product.id}-${index}`}>
                <div className="product-card">
                  <figure className="product-figure">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <figcaption className="product-caption">{product.title}</figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-right-arrows">
            <button className="carousel-button" onClick={() => handleScroll("left")}>
              <ChevronLeft />
            </button>
            <div
              className={`carousel-counter ${currentSlideChanged ? 'counter-updated' : ''}`}
              onAnimationEnd={() => setCurrentSlideChanged(false)}
            >
              {Math.min(currentSlide + 1, totalSlides)} / {totalSlides}
            </div>
            <button className="carousel-button" onClick={() => handleScroll("right")}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;
