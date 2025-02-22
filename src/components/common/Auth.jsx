/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Auth.css';
import { useAuthContext } from '../../context/AuthContext';
import Loader from '../common/Loader';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useAuthContext(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication function
    const isAuth = await mockAuthenticate(username, password);

    if (isAuth) {
      setIsLoading(false);
      setIsAuthenticated(isAuth)
    } else {
      setError('Invalid username or password');
    }
  };

  // Mock authentication function
  const mockAuthenticate = async (username, password)=> {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === 'admin' && password === 'password');
      }, 1000);
    });
  };

  return (
    <>
      {isLoading ? <Loader /> : 
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
      }
    </>
  );
};

export default Login;