import React, { useState } from 'react';
import axios from 'axios';
import '../css/reset.css'

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    try {
      // Validate if email is not empty
      if (email === '') {
        alert('Error: Please provide your email');
        return;
      }

      const response = await axios.post('http://localhost:5000/auth/reset-password', {
        email: email,
      });

      console.log('Password reset email sent:', response.data);
      alert('Success: Password reset email sent successfully.');
      // You might redirect the user to a confirmation screen or perform other actions
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Error: Failed to initiate password reset. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default PasswordReset;
