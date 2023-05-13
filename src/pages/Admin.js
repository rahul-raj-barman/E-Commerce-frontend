import React from 'react';
import Adminnav from '../components/Adminnav';
import Addproduct from '../components/Addproduct';
import Orders from './Orders'
import './admin.css'
import { Navbar } from 'react-bootstrap';


const Admin = () => {
    return (
        <div className='admin-cont'>
            <Adminnav/>
            
        </div>
    );
}

export default Admin;
