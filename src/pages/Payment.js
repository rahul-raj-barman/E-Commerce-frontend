import React, { useState } from 'react';

import './payment.css'

function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  }

  const handlePayment = (event) => {
    event.preventDefault();
    if (selectedOption === 'paypal') {
      // Handle PayPal payment here
    } else if (selectedOption === 'stripe') {
      // Handle Stripe payment here
    }
  }

  return (
    <>
      <h2 className='payment-title'>Select Payment Option:</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>
            <input type="radio" value="paypal" checked={selectedOption === 'paypal'} onChange={handleOptionSelect} />
            PayPal
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="stripe" checked={selectedOption === 'stripe'} onChange={handleOptionSelect} />
            Stripe
          </label>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </>
  );
}

export default PaymentPage;
