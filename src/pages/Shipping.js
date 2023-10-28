import React, { useEffect, useState } from "react";
import './shipping.css';
import { useNavigate } from "react-router";
import axios from 'axios'
import { BASE_URL } from '../config'


function ShippingAddressForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const navigate = useNavigate();
  const userid = localStorage.getItem('user_id')
  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name, address, phone, city, state, zip
    }

    axios.post(`${BASE_URL}/editadress/${userid}`, obj)
    .then((data) => {
        navigate('/previeworder')
        console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  };
  

  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
    <span className="title">Shipping Address</span>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Address :
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number : 
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State:
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ShippingAddressForm;
