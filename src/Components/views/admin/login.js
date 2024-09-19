import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert
import '../../../assets/css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://apicurug.tegararsyadani.my.id/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Redirect to dashboard
        navigate('/Dashboard');
      } else {
        const errorData = await response.json();
        // Use SweetAlert for error message
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: errorData.message || 'Invalid email or password',
        });
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Use SweetAlert for catching error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during login. Please try again.',
      });
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-label">Email</label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="login-label">Password</label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <a href="/" className="back-to-landing">Back to Landing</a>
    </div>
  );
};

export default Login;
