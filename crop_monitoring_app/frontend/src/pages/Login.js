import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
            const { data } = await axios.post(`${API}/api/auth/login`, {
            email,
            password
            });

            // Optional: Save token to localStorage
            localStorage.setItem('token', data.token);
            navigate('/dashboard'); // or /dashboard or any protected route
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please enter your credentials to login</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="signup-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};


export default Login;
