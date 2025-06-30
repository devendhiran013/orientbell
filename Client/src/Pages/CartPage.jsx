import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useCart } from '../context/CartContext';
import '../Styles/CartPage.css';
import { FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }

    try {
      const amount = getTotal();

      const { data: order } = await axios.post("http://localhost:5000/api/payment/create-order", { amount });

      const options = {
        key: "rzp_live_3bwnjafP09eVt8",
        amount: order.amount,
        currency: order.currency,
        name: "Tile Store",
        description: "Order Payment",
        order_id: order.id,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Razorpay response:", response);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong during payment.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <main className="cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-content">
          <div className="cart-left">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td className="cart-item-info">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </td>
                    <td>₹ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹ {item.price * item.quantity}</td>
                    <td>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                        <FaTrash color="red" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-buttons">
              <Link to="/alltiles" className="btn-outline">Continue Shopping</Link>
            </div>
          </div>

          <div className="cart-right">
            <h3>Summary</h3>
            <div className="summary-details">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹ {getTotal()}</span>
              </div>
              <div className="summary-line">
                <span>Order Total</span>
                <span>₹ {getTotal()}</span>
              </div>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>

        {/* POPUP: Show if not logged in */}
        {showLoginPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <p>Please login to proceed with checkout.</p>
              <button onClick={handleLoginRedirect} className="btn btn-primary login-btn">Go to Login</button>
              <button onClick={() => setShowLoginPopup(false)} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
