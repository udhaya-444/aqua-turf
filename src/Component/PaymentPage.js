import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="container">
        <div className="payment-form">
          <div className="close-icon" onClick={handleClose}>
            &times;
          </div>
          <h2>Pay Now</h2>
          <form>
            <div className="input-group">
              <label htmlFor="cardholder">Cardholder Name</label>
              <input type="text" id="cardholder" name="cardholder" required />
            </div>
            <div className="input-group">
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" name="card-number" required />
            </div>
            <div className="input-group">
              <label htmlFor="expiry-date">Expiration Date</label>
              <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
            </div>
            <div className="input-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
            <button type="submit" className="payment-button">Pay Now</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PaymentPage;
