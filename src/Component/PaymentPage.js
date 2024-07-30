import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PaymentPage.css';

const PaymentPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Payment successful!', {
      onClose: () => {
        navigate('/');
      }
    });
  };

  return (
    isVisible && (
      <div className="payment-backpb">
        <div className="containerpb">
          <div className="payment-formpb">
            <div className="close-iconpb" onClick={handleClose}>
              &times;
            </div>
            <h2>Pay Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-grouppb">
                <label htmlFor="cardholder">Cardholder Name</label>
                <input type="text" id="cardholder" name="cardholder" required />
              </div>
              <div className="input-grouppb">
                <label htmlFor="card-number">Card Number</label>
                <input type="text" id="card-number" name="card-number" required />
              </div>
              <div className="input-grouppb">
                <label htmlFor="expiry-date">Expiration Date</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
              </div>
              <div className="input-grouppb">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
              <button type="submit" className="payment-buttonpb">Pay Now</button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default PaymentPage;
