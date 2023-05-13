import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BASE_URL } from '../config';
import { useSelector } from 'react-redux';
import Featuredproduct from '../components/Featuredproduct';


const Products = () => {

    const [allproducts, setAllproducts] = useState([])
    const [products, setProducts] = useState([])

    const update = useSelector(state => state.update)


    useEffect(() => {
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken')
            }
        }
        axios.get(`${BASE_URL}/allproducts`, header)
        .then((data) => {
            setAllproducts([...data.data]);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [update])

    useEffect(() => {
            let arr = [];
            if(allproducts.length){
            const cat = localStorage.getItem('current-page')
                arr = allproducts.filter(e => {
                    return cat === e.category
                }) 
                console.log(arr)
            setProducts([...arr]);
        }
    }, [allproducts])

    return (
        <>
        <h5 style={{color:'#212A3E', paddingLeft: '3vh', marginTop: '5vh'}}>Products</h5>
        <div style={{ marginTop: '2vh', padding: '5vh', display: 'flex', justifyContent: 'center',backgroundColor: '#F1F6F9' , alignItems: 'center', marginRight: '4vh', marginLeft: '4vh'}}>
       
            {
                products ? products.map((e) => {
                    return(
                        <Featuredproduct key={e._id} id={e._id} desc ={e.description} title={e.name} image ={e.image}/>
                    )
                }): null
            }
        </div>
        </>
    );
}

export default Products;
