import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = async () => {
    try {
      // Validate if all fields are not empty
      if (formData.name === '' || formData.email === '' || formData.password === '') {
        alert('Error: Please fill in all fields');
        return;
      }

      const response = await axios.post('https://your-backend.com/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log('User registered:', response.data);
      alert('Success: Registration successful!');
      // You might redirect the user to a login screen or perform other actions
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error: Failed to register. Please try again.');
      // Handle registration error - show an error message to the user
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
