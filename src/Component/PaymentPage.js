import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrcode from '../assets/images/qrcode.jpg';
import './PaymentPage.css';
import Feedback from './Feedback';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import Selturf from './Selturf';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [showFeedback, setShowFeedback] = useState(false); // State to control feedback form display
    const navigate = useNavigate();

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Show a toast notification
      toast.success('Payment Successful!', {
          onClose: () => {
              // Redirect to Selturf after the toast closes
              navigate('/selturf');
          }
      });
      // Optionally show feedback form here
      // setShowFeedback(true); // Show feedback form
  };

  

    return (
        <div className="payment-form">
            <h2>Payment Methods</h2>
            <form onSubmit={handleSubmit}>
                <div className="payment-options">
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={handlePaymentMethodChange}
                        />
                        <span className="icon">&#128179;</span> Debit/Credit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={handlePaymentMethodChange}
                        />
                        <span className="icon">&#128179;</span> UPI
                    </label>
                </div>

                {paymentMethod === 'card' && (
                    <div className="card-details">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your Name" required />
                        </div>
                        <div className="input-group">
                            <label>Card Number</label>
                            <input type="text" placeholder="Credit Card Number" required />
                        </div>
                        <div className="input-group">
                            <label>Security Code (CVC)</label>
                            <input type="text" placeholder="CVC" required />
                        </div>
                        <div className="input-group">
                            <label>Expiration Date</label>
                            <input
                                type="text"
                                placeholder="MM/YYYY"
                                pattern="\d{2}/\d{4}"
                                required
                            />
                        </div>
                    </div>
                )}

                {paymentMethod === 'upi' && (
                    <div className="upi-details">
                        <div className="input-group">
                            <label>UPI ID</label>
                            <input type="text" placeholder="Enter your UPI ID" required />
                        </div>
                        <div className="scan-qr">
                            <p>or scan with this qr code</p>
                            <img
                                src={qrcode} // Replace with the actual path to your QR code image
                                alt="Scan with QR Code"
                                className="qr-image"
                            />
                        </div>
                    </div>
                )}

                <button type="submit" className="submit-button">Book Order</button>
            </form>
            <ToastContainer /> {/* Include ToastContainer to display toast notifications */}
        </div>
    );
};

export default PaymentPage;
