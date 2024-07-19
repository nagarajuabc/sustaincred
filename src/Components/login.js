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
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (formData.email === storedEmail && formData.password === storedPassword) {
      setFormData({ ...formData, submitted: true });
      window.location.href = '/home'; 
    } else {
      alert('Invalid email or password. Please Enter Valid Credentials.');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
      <h3>SUSTAINCRED FRUITS</h3>
      </header>
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Email Address: </label>
              <input
                type="email"
                name="email"
                placeholder='Enter Email'
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
                placeholder='Enter Password'
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
