import React from 'react'
import './orderhistory.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import {  BASE_URL } from '../config'

function Orderhistory() {
    const [orders, setOrders] = useState();
  
    const userid = localStorage.getItem('user_id');
    console.log(userid)

    useEffect(() => {
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken')
            }
        }

        axios.get(`${BASE_URL}/getmyorders/${userid}`, header)
        .then((data) => {
            console.log(data)
            setOrders(data.data.orders)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  
    return (
    <>
    <div className='history-title'><h3>Order History</h3></div>
    
    <div className='order-cont'>
        <table>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total Price</th>
                <th>Paid</th>
                <th>Delivered</th>
            </tr>

            {
                orders ?  orders.map((e) => {
                    return (<>
                        <tr>
                        <td>{e.orderId}</td>
                        <td>12-03-2022</td>
                        <td>${e.price}</td>
                        <td>$0</td>
                        <td>NO</td>
                    
                    </tr>
                        </>)
                }):null
            }

            
        
        </table>

    </div>
    
    </>
  )
}

export default Orderhistory