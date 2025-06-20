import React from 'react'
import Header from '../Components/Header';
import TileCarousel from '../Components/TileCarousel';
import Footer from '../Components/Footer';
import TilesListing from '../Components/TilesListing';
const Alltiles = () => {
  return (
    <div>
      <Header />
      <TileCarousel />
      <TilesListing />
      <Footer />
    </div>
  )
}

export default Alltiles
