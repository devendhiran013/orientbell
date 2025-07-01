import React, { useState } from 'react';
import '../Styles/Login.css';
import loginImage from '../assests/draw2.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/state'; // Make sure this path is correct

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const loggedIn = await response.json();

      if (response.ok) {
        dispatch(setLogin({ user: loggedIn.user, token: loggedIn.token }));
        navigate('/');
      } else {
        setError(loggedIn.message || 'Login Failed');
        setIsButtonDisabled(false);
      }
    } catch (err) {
      console.error('Login Failed:', err.message);
      setError('Login Failed');
      setIsButtonDisabled(false);
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
                <button type="submit" className="btn btn-primary btn-lg" disabled={isButtonDisabled}>
                  {isButtonDisabled ? "Logging in..." : "Login"}
                </button>
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
