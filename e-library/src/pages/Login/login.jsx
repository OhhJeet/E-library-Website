import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      let response = await axios.post('http://localhost:5001/api/login', { email, password });
      if(response.status === 200) {
        navigate('home');
      }

      // Authentication logic goes here (e.g., API call)
      console.log(response.message);
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className='login-boxcontainer'>
    <div className="login-container">
      <h2 style={{ color: 'white' }}>Welcome to the E-Library</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ color: 'white' }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label style={{ color: 'white' }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p style={{ color: 'white' }}>Don’t have an account ?<Link to ="/register" style={{ color: 'white' }}> Register here</Link></p>
    </div>
    </div>
  );
}

export default Login;
