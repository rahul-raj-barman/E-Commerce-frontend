import React from 'react';
import CartItem from '../components/CartItem';
import './cart.css'

const Cart = () => {
    return (
        <>
        <div className='page-title'><span>Shopping Cart</span></div>
        <div className='cart-cont'>
        <div className='items'>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
          <div className='price-summary'>
            <span>Subtotal</span>
            <span>(5 items) : </span>
            <span>$10</span>
            <hr/>
            <button className='checkout'>
                Proceed to Checkout
            </button>
          </div>
        </div>  
        </>
    );
}

export default Cart;
