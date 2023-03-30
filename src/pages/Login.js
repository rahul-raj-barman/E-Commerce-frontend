import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login submission
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="links">
          <a href="#">Forgot password?</a>
          <a href="#">Create account</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
