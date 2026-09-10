import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Login() {
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (user) {
    navigate('/admin', { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await login(email, password);
    if (result.ok) {
      navigate('/admin', { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="admin-login">
      <div className="login-card">
        <Link to="/" className="brand login-brand">
          <img src="/Logo.png" alt="Edge Institute logo" className="brand-logo" />
          <span className="brand-text">Edge Institute Admin</span>
        </Link>
        <h1>Sign in to the dashboard</h1>
        <p>Manage programs, news, testimonials and admissions inquiries.</p>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@edge.edu" />
          </div>
          <div className="field">
            <label htmlFor="login-pass">Password</label>
            <input id="login-pass" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="login-hint">
          Demo credentials: <code>admin@edge.edu</code> / <code>admin123</code>
        </p>
      </div>
    </div>
  );
}