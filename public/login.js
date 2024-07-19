import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    submitted: false, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setFormData({ ...formData, submitted: true });
    window.location.href = '/home';
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Sustaincred Fruits</h1>
      </header> */}
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Email Address: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <p className="register-link">
          New User? <a href="/register">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
