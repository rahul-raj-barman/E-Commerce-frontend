import React, { useState } from "react";
import './shipping.css';


function ShippingAddressForm() {
  const [name, setName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission of form data here
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Address Line 1:
        <input
          type="text"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        />
      </label>
      <label>
        Address Line 2:
        <input
          type="text"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
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
