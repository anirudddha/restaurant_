import React, { useState } from 'react';
import "./style.css";
const RestaurantLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-form">
        <h2>Login to Your Restaurant Account</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default RestaurantLogin;
