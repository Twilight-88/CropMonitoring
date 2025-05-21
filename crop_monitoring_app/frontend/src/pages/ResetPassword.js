import { useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/ResetPassword.css';

const ResetPassword = () => {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/reset-password', {
        token,
        password
      });

      if (response.data.success) {
        setSuccess('Password reset successfully. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        throw new Error(response.data.message || 'Password reset failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Password reset failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h1 className="reset-title">Reset Password</h1>
        <p className="reset-subtitle">Create a new password for your account</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="reset-form">
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              required
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" className="reset-button" disabled={isLoading}>
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;