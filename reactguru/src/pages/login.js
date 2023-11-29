import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css';

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async () => {
    try {
      if (formData.email === '' || formData.password === '') {
        alert('Error: Please provide both email and password');
        return;
      }

      const response = await axios.post('http://localhost:5000/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const userData = response.data;

      if (userData && userData.loggedIn) {
        console.log('Login successful:', userData);
        // Redirect using history object upon successful login
        history.push('/expanse-management');
      } else {
        alert('Error: Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Error: Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
