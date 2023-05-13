import React, { useState } from 'react';
import axios from 'axios'
import {BASE_URL} from '../config';
import { useNavigate } from 'react-router';
import './signup.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLodaing] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    setLodaing(true);
    event.preventDefault();
    const obj = {
      firstName, lastName, email, password
    }
    axios.post(`${BASE_URL}/signup`, obj)
    .then((data) => {
      setLodaing(false);
      console.log(data);
      navigate('/login')
    })
    .catch((err) => {
      setLodaing(false)
      if(err.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'One or more mandetory fields are empty!',
        })
      }
      if(err.response.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User already exists!',
        })
      }

      if(err.response.status === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Server Error!',
        })
      }
    })
  };

  return (

    <div className="signup-page">
      <form onSubmit={handleSubmit}>
        {
          loading ? <div className='spinner'>
          <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
          </div>:null
        }
        <h2>Signup</h2>
        <label>
          First Name
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
        <span className='mt-3'>Alreday have an account ? <Link to='/login'>Log In</Link></span>
      </form>
    </div>
  );
}

export default Signup;
