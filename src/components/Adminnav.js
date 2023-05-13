import React from 'react';
import { NavLink } from 'react-router-dom';
import './adminnav.css'


const Adminnav = () => {
    return (
        <div>
        <div className='admin-nav-cont'>
            <div className='inner-cont'>
            <div> <NavLink to={`../admin/addproduct`} className="admin-nav-link"><i class="fa-regular fa-square-plus"></i>Add Product</NavLink> </div>
            <div className='orders-nav'> <NavLink to ={`../admin/orders`} className="admin-nav-link"><i class="fa-regular fa-rectangle-list"></i>Orders</NavLink> </div>
            </div>
            
        </div>
        </div>
    );
}

export default Adminnav;
