import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config'
import './previewOrder.css'

const PreviewOrder = () => {
    const [userData, setUserData] = useState()
    const [userName, setUsername] = useState("")
    const [adress, setAddress] = useState("")
    const [cart, setCart] = useState([]);

    const [totalprice, setTotalPrice] = useState(0)
    const userid = localStorage.getItem('user_id')

  useEffect(() => {
      axios.get(`${BASE_URL}/cartitemcount/${userid}`)
      .then((data) => {
        console.log(data)
        setUserData(...data.data.userFound)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log("userData is...")

    if(userData) {
        setUsername(`${userData.firstName} ${userData.lastName}`);

        setAddress(userData.address);
        setCart([...userData.cart])
        let price = 0;
        cart.map((item) => {
            price += item.count * item.price;
        })
        setTotalPrice(price)
    }
  }, [userData])

    return (
        <>
           <div className="container-fluid">

            <div className="row mt-4 ms-2 me-2">
            
            <div className="col-lg-7 col-sm-10">
            
                <div className="row">
                
                    <div className="col-12">
                        <div className="row">
                
                    <div className="col-12">

                    <div className='shipping-cont'>
                    <div className='custom-text'>Shipping</div>
                    <div>Name: <span>{userName}</span></div>
                    <div>Address: <span>{adress}</span></div>
                    <div >
                    <a className='text-primary' href="#">Edit</a>
                </div>
                </div>

                    </div>
                
                </div>
                    
                    </div>
                
                </div>

                

                <div className="row">
                
                    <div className="col-12 mt-5">
                    <div className="product mt-2">
    
                  
                
                
                <div className="product-count">
                
                

                
                </div>
           
                    
                    </div>
                
                </div>
            
            </div>
            </div>
            
            <div className="col-lg-4 col-sm-10">
                <div className="summary-order">
                
                {
                    cart.map((item) => {
                        return (
                            <div>
                             <div>{item.name}</div>
                            <div>${item.price * item.count}</div>
                            </div>
                            
                        )
                    })
                }
                <hr />
                
                <div className="row">
                <div className="col-6">
                <Link to = '/payment'><button>Place Order</button></Link> 
                </div>
                <div className='col-2'>
                <div style={{display: 'inline-block'}}>${totalprice}</div>
                
                </div>
                </div>
                
                
                    
                </div>
            
            </div>

            </div>
           
           </div>
        </>
    );
}

export default PreviewOrder;
