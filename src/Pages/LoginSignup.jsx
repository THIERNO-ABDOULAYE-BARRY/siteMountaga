import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', terms: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() === '') {
      alert('Please enter your full name.');
      return;
    }
    if (!validateEmail(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (form.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    if (!form.terms) {
      alert('You must agree to the Terms of Use & Privacy Policy.');
      return;
    }
    // Simulated authentication logic
    alert(`Welcome, ${form.name}! Your account has been created.`);
    // You can redirect or clear the form here if needed
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Create an Account</h1>
        <form className="loginsignup-form" onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={form.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Use</a> & <a href="/privacy">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
          <p className="loginsignup-login">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
