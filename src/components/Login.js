import React from 'react';
import './Login.css'; // Create a CSS file for custom styles

function Login() {
  return (
    <div className="login-container d-flex">
      <div className="left-panel d-flex flex-column justify-content-center align-items-center">
        <img src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png" alt="Cloud Conference Logo" className="mb-4" />
        <h3>Welcome to Cloud Conferences</h3>
        <p>Your gateway to the latest in cloud technology.</p>
      </div>
      <div className="right-panel d-flex flex-column justify-content-center">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" name="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;