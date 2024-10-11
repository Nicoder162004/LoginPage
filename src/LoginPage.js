import React from 'react';
import './LoginPage.css'; // Importing the CSS file

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login-box">
        {/* Left Side: Login Form */}
        
        <div className="form-container">
        <h3>Discovery Git</h3>
          <h1 className="heading">Log in.</h1>
          <p className="subtext">Log in with the details that you entered during registration.</p>
          <form>
            <div className="input-group">
              <label htmlFor="email">Enter email address : </label>
              <input type="email" id="email" placeholder="yourname@example.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Enter password : </label>
              <input type="password" id="password" placeholder="Enter your password" />
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-btn">Log in</button>
          </form>
          <button className="google-login-btn">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google logo" />
            Sign in with Google
          </button>
          <p className="register-text">
            Don't have an account? <a href="#" className="register-link">Register</a>
          </p>
        </div>

        <div className="welcome-container">
          <h2 className="welcome-heading">Nice to see you again</h2>
          <p className="welcome-subtext">Welcome back!</p>
          <img src="https://i.pinimg.com/736x/cf/66/33/cf66334166ddd4c120148dc07c492449.jpg" alt="Welcome Back" className="welcome-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
