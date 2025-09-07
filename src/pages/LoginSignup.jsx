import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!form.email) tempErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) tempErrors.email = 'Invalid email';
    if (!form.password) tempErrors.password = 'Password is required';
    else if (form.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (!isLogin) {
      if (!form.confirmPassword) tempErrors.confirmPassword = 'Confirm password is required';
      else if (form.password !== form.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // API integration placeholder
      alert(isLogin ? 'Login successful!' : 'Signup successful!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="username" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
            />
            <button
              type="button"
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#3182ce', cursor: 'pointer', fontSize: '0.95rem' }}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {!isLogin && (
          <div>
            <label>Confirm Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      <button
        type="button"
        style={{marginTop: '1rem', padding: '0.7rem 1.2rem', borderRadius: '8px', background: '#3182ce', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '500'}}
        onClick={() => navigate('/profile')}
      >
        Go to Profile
      </button>
    </div>
  );
};

export default LoginSignup;
