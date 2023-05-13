import React from 'react';
import './userprofile.css'
import axios from 'axios'
import { useEffect, useState
 } from 'react';
import { BASE_URL } from '../config';


const Userprofile = () => {
    const [user, setUser] = useState()

    const userid = localStorage.getItem('user_id')
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
        console.log(user)
    }, [user])

    return (
        <div className='profile-cont'>
            <div className='profile-heading'><span>User Profile</span></div>
            <div className='user-data'>
                <label htmlFor="fname">First Name : </label>
                <input type="text" name='firstname'
                 placeholder={user ? user.firstName: ""} id='fname' />

                <label htmlFor="lname">Last Name : </label>
                <input type="text" name='lastname' placeholder={user ? user.lastName: ""}/>

                <label htmlFor="email">Email : </label>
                <input type="email" name='email' placeholder={user ? user.email: ""}/>

                <label htmlFor="address">Address : </label>
                <textarea name="user-address" id="" cols="33" rows="4" placeholder={user ? user.address: ""}></textarea>
                
                <label htmlFor="state">State : </label>
                <input type="text" name='firstname' id='state' placeholder={user ? user.state : ""}/>

                <label htmlFor="zip">Zip Code : </label>
                <input type="text" name='firstname' id='zip'/>
            
            </div>
            
        </div>
    );
}

export default Userprofile;
