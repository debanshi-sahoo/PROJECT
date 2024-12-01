// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './LoginPage.css'; // Import the CSS file for the login page styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (email === '' || password === '') {
      setError('Please fill in both fields.');
    } else {
      // Simulating a login success
      console.log('Login successful');
      setError('');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="register-link">
        <p>Don't have an account? <Link to="/register/login">Register here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
