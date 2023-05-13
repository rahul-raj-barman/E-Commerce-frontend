import React, { useState } from 'react';
import paypal from './icons/paypal.ico';
import stripe from './icons/stripe.ico';
import { Link } from 'react-router-dom';
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
          <img className='me-2' src={paypal} alt="" height="60px"/>
            <input type="radio" value="paypal" checked={selectedOption === 'paypal'} onChange={handleOptionSelect} />
        </div>
        <div>
        <img className="me-2" src={stripe} alt="" height="60px"/>
            <input type="radio" 
            value="stripe" checked={selectedOption === 'stripe'} onChange={handleOptionSelect} />
        </div>
        <Link to='/paypal'><button type="submit">Pay Now</button></Link>
        
      </form>
    </>
  );
}

export default PaymentPage;
