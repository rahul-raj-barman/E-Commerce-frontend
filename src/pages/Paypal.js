import React, { useState, useEffect} from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../config';
import { useNavigate } from 'react-router';

function Paypal() {
    const [success, setSuccess] = useState()
    const [user, setUser] = useState()
    const [price, setPrice] = useState(null)
    const [orderId, setOrderId] = useState();
    const navigate = useNavigate();
    const userid = localStorage.getItem('user_id');

    useEffect(() => {
        if(success) {
        const body = {
            orderId, price
        } 
        const header = {
            headers: {
                Authorization : "Bearer " + localStorage.getItem('userToken')
            }
        }
        axios.post(`${BASE_URL}/addorder/${userid}`,body, header)
        .then((data) => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    }, [success])

    useEffect(() => {
        
        if(orderId && user){
        const product = Object.entries(user.cart);
        const body = {
            orderId : orderId, product: product
        }
        axios.post(`${BASE_URL}/setorder`, body)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    },[orderId, user])

    
    useEffect(() => {
        axios.get(`${BASE_URL}/cartitemcount/${userid}`)
        .then((data) => {
            console.log(data.data.userFound)
            setUser(...data.data.userFound)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        let sum = 0;
        user && user.cart.map((e) => {
            sum += e.price * e.count
        })
        setPrice(sum)
    }, [user])
    
    

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'book',
                    amount: {
                        currency_code: 'USD',
                        value: price ? price: 100
                    }
                }
            ],
            application_content: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
        .then((orderId) => {
            setOrderId(orderId);
            return orderId

        })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture()
        .then((details) => {
            const {payer}= details
            console.log(payer);
            setSuccess(true);
            Swal.fire('Payment Successful !')
        })
    }

    const onError = (data, actions) => {
        console.log(data.message)
    }
  return (
    <>
    
    <div style={{height: '80vh',display : 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PayPalScriptProvider options={{'client-id': 'AcFe4rLRz964FPUsU9CSvzzEfGCV73dC8HWZsJ4CL1KhiX9rw2QxvJkkk0ki-P3T0ZYiKWu8emP8YqJ8'}}>
        
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError}/>
        </PayPalScriptProvider> 


    </div>

    <div>
        <div style={{width: '100vw', textAlign: 'center', fontSize: '1.8rem'}}><NavLink to='/'>Go to HomePage</NavLink></div>    
    </div>
    </>
  )
}

export default Paypal