import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useCart } from '../context/CartContext';
import '../Styles/CartPage.css';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
