import "../Styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/state";
import { useState } from "react";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  return (
    <div className="header-container">
      <div className="top-header">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-shape"></div>
          </div>
          <span className="logo-text">orientbell</span>
          <span className="logo-subtext">tiles</span>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for floor tiles |"
            className="search-input"
          />
          <div className="search-icons">
            <button className="search-btn">
              <span className="search-icon">🔍</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="phone-number">
            <span className="phone-icon">📞</span>
            <span>1800 - 208 - 1015</span>
          </div>

          <div className="stores">
            <span className="store-icon">🏪</span>
            <span>
              <Link to="/becomeadealer">Become a Dealer</Link>
            </span>
          </div>

          <div className="cart">
            <Link to="/cart">
              <span className="cart-icon">🛒</span>
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>
          </div>

          <div className="user-icon" onClick={() => setShowLogout(!showLogout)} style={{ cursor: "pointer", position: "relative" }}>
            <span className="user-symbol">👤</span>
            

            {showLogout && (
              <div className="logout-dropdown" style={{
                position: "absolute",
                top: "35px",
                right: "0",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
                zIndex: 1000
              }}
                onClick={handleLogout}
              >
                Logout
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/designideas">Design Ideas</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
