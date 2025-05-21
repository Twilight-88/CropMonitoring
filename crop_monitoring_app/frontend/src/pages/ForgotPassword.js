import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/forgot-password', { email });
      
      if (response.data.success) {
        setSuccess(response.data.message);
      } else {
        throw new Error(response.data.message || 'Request failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h1 className="forgot-title">Forgot Password</h1>
        <p className="forgot-subtitle">
          Enter your email address and we'll send you a link to reset your password
        </p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              required
            />
          </div>

          <button type="submit" className="forgot-button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="back-to-login">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;