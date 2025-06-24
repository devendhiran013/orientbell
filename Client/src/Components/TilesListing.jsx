import React, { useState } from 'react';
import { FaFilter, FaSearch, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import '../Styles/TilesListing.css';
import { useCart } from '../context/CartContext';

const TilesListingPage = () => {
    const { addToCart, incrementQuantity, decrementQuantity, cart } = useCart();

    const allTiles = [
        {
            id: 1,
            name: 'Glazed Vitrified Tile - Marble White',
            price: 45,
            size: '600x600 mm',
            category: 'Floor Tiles',
            finish: 'Glossy',
            color: 'White',
            type: 'Vitrified',
            image: 'https://images.orientbell.com/media/catalog/product/d/g/dgvt_stucco_white.jpg'
        },
        {
            id: 2,
            name: 'Full Vitrified Tile - Wooden Brown',
            price: 55,
            size: '800x800 mm',
            category: 'Floor Tiles',
            finish: 'Matt',
            color: 'Brown',
            type: 'Full Body Vitrified',
            image: 'https://images.orientbell.com/media/catalog/product/n/a/natural_rottowood_beige.jpg'
        },
        {
            id: 3,
            name: 'Ceramic Tile - Ocean Blue',
            price: 35,
            size: '300x600 mm',
            category: 'Wall Tiles',
            finish: 'Glossy',
            color: 'Blue',
            type: 'Ceramic',
            image: 'https://images.orientbell.com/media/catalog/product/t/l/tl_kaso_blue_cement_stone_floor_tile_400x400_mm.jpg'
        },
        {
            id: 4,
            name: 'Digital Glazed Vitrified Tile - Argento Paradiso',
            price: 65,
            size: '600x1200 mm',
            category: 'Floor Tiles',
            finish: 'Polished',
            color: 'Grey',
            type: 'Digital Vitrified',
            image: 'https://images.orientbell.com/media/catalog/product/s/u/super_gloss_jeriba_quartzite_blue.jpg'
        },
        {
            id: 5,
            name: 'Subway Tile - Classic White',
            price: 28,
            size: '75x150 mm',
            category: 'Wall Tiles',
            finish: 'Matt',
            color: 'White',
            type: 'Ceramic',
            image: 'https://images.orientbell.com/media/catalog/product/p/g/pgvt_endless_statuario_marble.jpg'
        },
        {
            id: 6,
            name: 'Outdoor Tile - Slate Grey',
            price: 75,
            size: '600x600 mm',
            category: 'Outdoor Tiles',
            finish: 'Anti-Slip',
            color: 'Grey',
            type: 'Porcelain',
            image: 'https://images.orientbell.com/media/catalog/product/t/l/tl_grey_multi_small_mosaic_tl_grey_small_mosaic_tl_platinum_small_mosaic_400x400_mm.jpg'
        },
        // Newly added tiles below
        {
            id: 7,
            name: 'Endless Tiles - Carrara Marble',
            price: 70,
            size: '800x800 mm',
            category: 'Floor Tiles',
            finish: 'Polished',
            color: 'White',
            type: 'Digital Vitrified',
            image: 'https://images.orientbell.com/media/catalog/product/p/g/pgvt_onyx_marble_grey.jpg'
        },
        {
            id: 8,
            name: 'Natural Wood Tile - Teak',
            price: 60,
            size: '600x600 mm',
            category: 'Floor Tiles',
            finish: 'Textured',
            color: 'Brown',
            type: 'Full Body Vitrified',
            image: 'https://images.orientbell.com/media/catalog/product/d/g/dgvt_desert_wood_beige.webp'
        },
        {
            id: 9,
            name: 'Mosaic Tile - Royal Blue',
            price: 85,
            size: '300x300 mm',
            category: 'Wall Tiles',
            finish: 'Glossy',
            color: 'Blue',
            type: 'Glass',
            image: 'https://images.orientbell.com/media/catalog/product/s/u/super_gloss_blue_marble_stone_lt.webp'
        },
        {
            id: 10,
            name: 'Stone Look Tile - Himalayan Grey',
            price: 58,
            size: '600x600 mm',
            category: 'Floor Tiles',
            finish: 'Matt',
            color: 'Grey',
            type: 'Porcelain',
            image: ' https://images.orientbell.com/media/catalog/product/s/i/silken_malena_ice_grey.jpg'
        },
        {
            id: 11,
            name: 'Metro Tile - Vintage Green',
            price: 42,
            size: '75x150 mm',
            category: 'Wall Tiles',
            finish: 'Glossy',
            color: 'Green',
            type: 'Ceramic',
            image: 'https://images.orientbell.com/media/catalog/product/s/u/super_gloss_onyx_marble_aqua.jpg'
        },
        {
            id: 12,
            name: 'Anti-Skid Tile - Sand Beige',
            price: 68,
            size: '600x600 mm',
            category: 'Outdoor Tiles',
            finish: 'Textured',
            color: 'Beige',
            type: 'Porcelain',
            image: 'https://images.orientbell.com/media/catalog/product/p/g/pgvt_breccia_marble_beige_1.jpg'
        }
    ];



    const [filters, setFilters] = useState({
        category: '',
        finish: '',
        color: '',
        type: '',
        size: '',
        priceRange: ''
    });

    const [activeFilter, setActiveFilter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filterOptions = {
        category: ['All', 'Floor Tiles', 'Wall Tiles', 'Outdoor Tiles', 'Bathroom Tiles'],
        finish: ['All', 'Glossy', 'Matt', 'Polished', 'Anti-Slip', 'Textured'],
        color: ['All', 'White', 'Brown', 'Blue', 'Grey', 'Black', 'Beige'],
        type: ['All', 'Vitrified', 'Full Body Vitrified', 'Ceramic', 'Digital Vitrified', 'Porcelain'],
        size: ['All', '300x600 mm', '600x600 mm', '800x800 mm', '600x1200 mm', '75x150 mm'],
        priceRange: ['All', 'Under ₹30', '₹30-₹50', '₹50-₹75', 'Over ₹75']
    };

    const filteredTiles = allTiles.filter(tile => {
        return (
            (filters.category === '' || tile.category === filters.category) &&
            (filters.finish === '' || tile.finish === filters.finish) &&
            (filters.color === '' || tile.color === filters.color) &&
            (filters.type === '' || tile.type === filters.type) &&
            (filters.size === '' || tile.size === filters.size) &&
            (
                filters.priceRange === '' ||
                (filters.priceRange === 'Under ₹30' && tile.price < 30) ||
                (filters.priceRange === '₹30-₹50' && tile.price >= 30 && tile.price <= 50) ||
                (filters.priceRange === '₹50-₹75' && tile.price > 50 && tile.price <= 75) ||
                (filters.priceRange === 'Over ₹75' && tile.price > 75)
            ) &&
            tile.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value === 'All' ? '' : value
        }));
        setActiveFilter(null);
    };

    const resetFilters = () => {
        setFilters({
            category: '',
            finish: '',
            color: '',
            type: '',
            size: '',
            priceRange: ''
        });
    };

    const getQuantity = (tileId) => {
        const tile = cart.find(item => item.id === tileId);
        return tile ? tile.quantity : 0;
    };

    return (
        <div className="tiles-listing-page">
            <div className="page-header">
                <h1>Tile Collections</h1>
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search tiles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="listing-container">
                <div className="filters-sidebar">
                    <div className="filters-header">
                        <FaFilter />
                        <h3>Filters</h3>
                        <button onClick={resetFilters}>Reset</button>
                    </div>

                    {Object.keys(filterOptions).map(filterType => (
                        <div className="filter-group" key={filterType}>
                            <div
                                className={`filter-header ${activeFilter === filterType ? 'active' : ''}`}
                                onClick={() => setActiveFilter(activeFilter === filterType ? null : filterType)}
                            >
                                {filterType.charAt(0).toUpperCase() + filterType.slice(1).replace(/([A-Z])/g, ' $1')}
                                <span className="arrow">{activeFilter === filterType ? '▲' : '▼'}</span>
                            </div>

                            {activeFilter === filterType && (
                                <div className="filter-options">
                                    {filterOptions[filterType].map(option => (
                                        <div
                                            key={option}
                                            className={`filter-option ${filters[filterType] === (option === 'All' ? '' : option) ? 'selected' : ''}`}
                                            onClick={() => handleFilterChange(filterType, option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="tiles-grid">
                    {filteredTiles.length > 0 ? (
                        filteredTiles.map(tile => (
                            <div className="tile-card" key={tile.id}>
                                <div className="tile-image">
                                    <img src={tile.image} alt={tile.name} />
                                </div>
                                <div className="tile-info">
                                    <h3>{tile.name}</h3>
                                    <div className="tile-specs">
                                        <span>Size: {tile.size}</span>
                                        <span>Finish: {tile.finish}</span>
                                        <span>Type: {tile.type}</span>
                                    </div>
                                    <div className="tile-price">₹{tile.price} / sq.ft</div>
                                    <div className="tile-actions">
                                        {getQuantity(tile.id) > 0 ? (
                                            <div className="qty-controls">
                                                <button onClick={() => decrementQuantity(tile.id)}><FaMinus /></button>
                                                <span>{getQuantity(tile.id)}</span>
                                                <button onClick={() => incrementQuantity(tile.id)}><FaPlus /></button>
                                            </div>
                                        ) : (
                                            <button className="add-to-cart" onClick={() => addToCart(tile)}>
                                                <FaShoppingCart /> Add to Cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No tiles match your filters. Try adjusting your search criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TilesListingPage;
