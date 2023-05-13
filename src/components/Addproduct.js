import React, { useState } from 'react';
import './addproduct.css'
import axios from 'axios';
import { BASE_URL } from '../config';
import Swal from 'sweetalert2';

const Addproduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();

    const handleSubmit = () => {
        const formData = new FormData();
        console.log("Image isss")
        console.log(image[0].name)
        formData.append('name',name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('image', image[0].name);
        formData.append('category', category);
        
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("userToken")
            }
        }
        axios.post(`${BASE_URL}/addproduct`, formData, header)
        .then((data) => {
            console.log(data)
            Swal.fire(
                'Yehh!',
                'Product Was Added!',
                'success'
              )
            // setName("");
            // setDescription("");
            // setImage("");
            // setPrice("");
            // setQuantity("");
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='add-main-cont'>
        <div>
            <div className='add-title'><span>Add Products</span></div>
            <div className='product-form'>
                <input type="text" name='name' placeholder='Name . . .' 
                value = {name}
                onChange={(e) => setName(e.target.value)}/>

                <select name="category" id="category" value = {category} onChange = {(e) => setCategory(e.target.value)}>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                </select>

                <textarea name="description" id="" cols="25" rows="5" placeholder='Product Description . . .' value = {description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
                
                <input type="number" name='price' placeholder='Price . . .' value = {price}
                onChange={(e) => setPrice(e.target.value)}/>
                
                <input type="number" name='quantity' placeholder='Quantity . . .' value = {quantity}
                onChange={(e) => setQuantity(e.target.value)}/>
                
                <input type="file" name='image'
                onChange={(e) => setImage(e.target.files)}/>
                <button  onClick={handleSubmit} className='submit-product'>Submit</button>
            </div>

        </div>
        </div>
    );
}

export default Addproduct;
