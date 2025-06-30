import React, { useState } from 'react';
import '../Styles/Login.css';
import loginImage from '../assests/draw2.webp';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('admin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/* Left Side - Image */}
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={loginImage} className="img-fluid" alt="Login" />
          </div>

          {/* Right Side - Form */}
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don’t have an account? <Link to="/register" className="link-danger">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
