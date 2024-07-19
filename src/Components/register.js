import React, { useState } from 'react';
import './register.css';

const countryPhoneCodes = {
  USA: '+1',
  UK: '+44',
  India: '+91',
  Canada: '+1',
  Australia: '+61',
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
    country: '',
    phoneNumber: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormData({
      ...formData,
      country: country,
      phoneNumber: countryPhoneCodes[country] || '',
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.retypePassword) {
      alert("Passwords don't match. Please Enter Correct password.");
      return;
    }
    const { email, password } = formData;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
      country: '',
      phoneNumber: '',
    });
  
    alert('User Created Successfully. Please login with provided credentials.');
  };
  

  return (
    <div className="App">
      <header className="App-header">
      <h3>SUSTAINCRED FRUITS</h3>
      </header>
      <div className="card">
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>First Name: </label>
              <input
                type="text"
                name="firstName"
                placeholder='Enter First Name'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name: </label>
              <input
                type="text"
                name="lastName"
                placeholder='Enter Lase Name'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
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
            <div>
              <label>Conform Password: </label>
              <input
                type="password"
                name="retypePassword"
                placeholder='Conform Password'
                value={formData.retypePassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>Country: </label>
              <select
                name="country"
                placeholder='Select Countrt'
                value={formData.country}
                onChange={handleCountryChange}
                required
              >
                <option value="">Select Country</option>
                {Object.keys(countryPhoneCodes).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Phone Number: </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder='Enter Phone Number'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
