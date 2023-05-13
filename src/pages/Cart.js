import React, { useEffect, useState, useContext } from 'react';
import CartItem from '../components/CartItem';
import { BASE_URL } from '../config';
import axios from 'axios';
import './cart.css'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import priceContext from '../context/priceContext';

const Cart = () => {
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState();
    const currPrice = useContext(priceContext)

    const update = useSelector(state => state.update)

    useEffect(() => {
      console.log(update)
      const userId = localStorage.getItem("user_id")
      axios.get(`${BASE_URL}/userscartitems/${userId}`)
      .then((userObj) => {
        // console.log(userObj.data.userFound[0].cart)
        setProducts([ ...userObj.data.userFound[0].cart])
        // setPrice(price + )
      })
      .catch((err) => {
        console.log(err)
      })


    }, [update])

    useEffect(() => {
        let totalPrice =  0;
        products && products.map((product) => {
          console.log(product)
          totalPrice += product.price * product.count;
        })
        setPrice(totalPrice)

    }, [products])

    // useEffect(() => {
    //   let amount = 0;
    //   for(let i = 0; i < products.length; i++) {
    //     console.log(products[i].price)
    //     amount+= products[i].price * products[i].count
    //   }
    //   setPrice(amount)
    // }, [products])


    return (
        <>
        <div className='page-title'><span>Shopping Cart</span></div>
        <div className='cart-cont'>
        <div className='items'>
          {
            products ? products.map((obj) => {
              console.log('image si')
              console.log(obj)
                return(
                  <CartItem count={obj.count} image = {obj.image} key ={obj._id} pid = {obj._id} name = {obj.name} price = {obj.price}/>
                )
            }):null
          }
        </div>
          <div className='price-summary'>
            <span>Subtotal</span>
            <span>({products ? products.length: 0} items) : </span>
            <span>${price ? price : 0}</span>
            <hr/>
            <Link to ="/shipping"> 
            <button className='checkout'>
            Proceed to Checkout
            </button>
            </Link>
            
          </div>
        </div>  
        </>
    );
}

export default Cart;
