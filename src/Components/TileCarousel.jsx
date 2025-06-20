"use client";

import "../Styles/TileCarousel.css";
import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Lucide arrow icons

import MarbleTiles from "../assests/marble-tiles.webp";
import WoodenTile from "../assests/wooden-tiles.webp";
import VitrifiedTiles from "../assests/vitrified-tiles.jpeg";
import CeramicTile from "../assests/ceramic-tiles.webp";
import CoolTiles from "../assests/cool-tiles.webp";
import LargeTiles from "../assests/large-tiles.webp";
import FloorTiles from "../assests/floor-tiles.webp";
import WallTiles from "../assests/wall-tiles.webp";
import BathroomTiles from "../assests/bathroom-tiles.jpeg";
import KitchenTiles from "../assests/kitchen-tiles.webp";

const tileCategories = [
  { id: 1, name: "Marble Tiles", image: MarbleTiles },
  { id: 2, name: "Wooden Tiles", image: WoodenTile },
  { id: 3, name: "Vitrified Tiles", image: VitrifiedTiles },
  { id: 4, name: "Ceramic Tiles", image: CeramicTile },
  { id: 5, name: "Cool Tiles", image: CoolTiles },
  { id: 6, name: "Large Tiles", image: LargeTiles },
  { id: 7, name: "Floor Tiles", image: FloorTiles },
  { id: 8, name: "Wall Tiles", image: WallTiles },
  { id: 9, name: "Bathroom Tiles", image: BathroomTiles },
  { id: 10, name: "Kitchen Tiles", image: KitchenTiles },
];

const TileCarousel = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="marquee-section">
  <div className="carousel-arrow-container">
    <button className="manual-arrow left" onClick={() => handleScroll("right")}>
      <ChevronLeft size={32} />
    </button>

    <div className="marquee enable-animation" ref={scrollRef}>
      <div className="marquee__content">
        {[...tileCategories, ...tileCategories].map((tile, idx) => (
          <div className="carousel-item" key={idx}>
            <div className="tile-card">
              <div className="tile-image-container">
                <img src={tile.image} alt={tile.name} className="tile-image" />
              </div>
             
            </div>
             <div className="tile-name">{tile.name}</div>
          </div>
        ))}
      </div>
    </div>

    <button className="manual-arrow right" onClick={() => handleScroll("left")}>
      <ChevronRight size={32} />
    </button>
  </div>
</div>

  );
};

export default TileCarousel;
