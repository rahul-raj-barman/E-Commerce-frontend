import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../config';
import { actionCreators } from '../states';
import './login.css';
import swal from 'sweetalert2'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    axios.post(`${BASE_URL}/login`, {email:email, password:password})
    .then((result) => {
        const token = result.data.token;
        localStorage.setItem("userToken", token);
        dispatch(actionCreators.updateData(result.data.result))
        localStorage.setItem("user", JSON.stringify(result.data.result))
        localStorage.setItem("user_id", result.data.user_id);

        localStorage.setItem("firstName", result.data.result.firstName);
        setLoading(false);
        navigate('/')
    })
    .catch((err) => {
      setLoading(false)
      console.log(err.response.status)
      if(err.response.status) {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "User doesn't exists!",
        })
      }
    })

    // TODO: Handle login submission
  }

  return (
    <div className="login-container">
    <span class="sr-only">Loading...</span>
      <form className="login-form" onSubmit={handleSubmit}>
      {
      loading? <div className="spinner"><div class="spinner-border m-5" role="status"></div></div>: null
      }
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
        <span>Not An User ?</span>
          <Link to='/signup'>Create account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
