import React, { useState } from 'react';
import './Redeem.css';

const RedeemCoin = ({ onRedeem, userCoins }) => {
  const [coinCode, setCoinCode] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRedeem = () => {
    if (coinCode.trim() === '') {
      setError('Please enter a coin code');
      return;
    }

    // Call the redeem function passed as a prop
    onRedeem(coinCode)
      .then((result) => {
        if (result.success) {
          setSuccessMessage(`Successfully redeemed ${result.coins} coins!`);
          setCoinCode('');
        } else {
          setError(result.message || 'Failed to redeem coin code');
        }
      })
      .catch(() => {
        setError('An error occurred while redeeming the coin');
      });
  };

  return (
    <div className="redeem-container">
      <h2>Redeem Your Coin</h2>
      <div className="redeem-form">
        <input
          type="text"
          placeholder="Enter Coin Code"
          value={coinCode}
          onChange={(e) => setCoinCode(e.target.value)}
        />
        <button onClick={handleRedeem}>Redeem</button>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
      <div className="coin-balance">
        <p>Your current coin balance: {userCoins}</p>
      </div>
    </div>
  );
};

export default RedeemCoin;
