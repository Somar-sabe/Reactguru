import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory(); // Initialize useHistory

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async () => {
    try {
      if (formData.email === '' || formData.password === '') {
        alert('Error: Please provide both email and password');
        return;
      }

      // Send a POST request to your actual backend login endpoint
      const response = await axios.post('https://your-backend.com/login', {
        email: formData.email,
        password: formData.password,
      });

      // Assuming the backend responds with a token or user data upon successful login
      const userData = response.data;

      console.log('Login successful:', userData);

      // Redirect to 'ExpanseManagement' upon successful login
      history.push('/expanse-management'); // Redirect using useHistory
    } catch (error) {
      console.error('Login error:', error);
      alert('Error: Invalid email or password. Please try again.');
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
