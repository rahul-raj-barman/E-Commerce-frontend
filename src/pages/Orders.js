import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../config'


const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/getorders`)
        .then((data) => {
            console.log(data.data.orders)
            setOrders(data.data.orders);
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <>
        

        <div style={{ padding: '20px', marginLeft: '20px', position: 'fixed', top: '10vh', right: '4vw'}}>
            <div>Orders</div>
            <div>
                <table style={{width: '65vw'}}>
                <tr>
                    <th>OrderId</th>
                    <th>Products</th>
                    <th>Count</th>
                    <th>Status</th>
                </tr>

                {
                    orders ? orders.map((e) => {
                        return (
                        <>
                        <tr>
                        <td>{e.orderId}</td>
                        <td>{e.product.map((e) => {
                            if(e[1]) {
                           return(<>
                                {e[1].name}
                            </>)
                            }
                        })}</td>

                        <td>
                        {e.product.map((e) => {
                            if(e[1]) {
                           return(<>
                                {e[1].count}
                            </>)
                            }
                        })}
                        
                        </td>
                        <td>
                            Pending
                        </td>
                    </tr>
                        </>
                        )
                    }): null
                }
                
                </table>
            </div>
        </div>
        

        </>
    );
}

export default Orders;
