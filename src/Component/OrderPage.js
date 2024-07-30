import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrderPage.css';

const products = [
  { name: 'Cap', description: 'This product is made from at least 50% recycled polyester fiber.', price: 5.00 },
  { name: 'Linen Shoes', description: 'You will wear it again and again, this shoe is remarkable and loyal.', price: 7.00 },
  { name: 'Hoodie', description: 'Durably stitched surfaces, clean finishes and shine to make you dazzle.', price: 9.00 }
];

const Orderpage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleProductChange = (product, checked) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setSelectedProducts(selectedProducts.filter(p => p.name !== product.name));
    }
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 100).toFixed(2);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Submitted successful!', {
      onClose: () => {
        navigate('/payment');
      }
    });
  };

  if (!showForm) {
    return null;
  }

  return (
    <div className="order-page">
      <div className="payment-page">
        <div className="close-button" onClick={handleClose}>×</div>
        <h2>Booking Slot</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <div className="name-input">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label>Your E-mail</label>
            <input type="email" placeholder="example@example.com" required />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
            {/* <label>Shipping Address</label> */}
            <input type="text" placeholder="Street Address" required />
            <input type="text" placeholder="Street Address Line 2" />
            <div className="address-input">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State / Province" required />
              <input type="text" placeholder="Postal / Zip Code" required />
            </div>
          </div>
          <div className="form-group">
            <label>Total: {calculateTotal()}</label>
          </div>
          <div className="form-group">
            <label>Payment Methods</label>
            <div className="payment-method">
              <input
                type="radio"
                name="payment-method"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <label>Debit or Credit Card</label>
            </div>
            <div className="payment-method">
              <input
                type="radio"
                name="payment-method"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              <label>UPI payment</label>
            </div>
            <div className="payment-method">
              <input
                type="radio"
                name="payment-method"
                value="cash-on-delivery"
                checked={paymentMethod === 'cash-on-delivery'}
                onChange={() => setPaymentMethod('cash-on-delivery')}
              />
              <label>Cash on Delivery</label>
            </div>
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Orderpage;
