import React from 'react';
import { BASE_URL } from '../config';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Featuredproduct from './Featuredproduct';

const FilteredProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [currProducts, setCurrproducts] = useState([])

    const search = useSelector(state => state.search)
    useEffect(() => {
        allProducts.map((product) => {

            if(product.name.toLowerCase().includes(search) && !currProducts.includes(product)){
                setCurrproducts([...currProducts, product])
            }
        })
    }, [search])

    const userToken = localStorage.getItem('userToken');
    useEffect(() => {
        axios.get(`${BASE_URL}/allproducts`, {headers : {
            "Authorization" : `Bearer ${userToken}`
        }})
        .then((products) => {
            setAllProducts(products.data)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])

    useEffect(() => {
        console.log(currProducts)
    }, [currProducts])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            {

                currProducts.length ? currProducts.map((e) => {
                    return(
                        <Featuredproduct key={e._id} title = {e.name} desc={e.description} id = {e._id} image = {e.image}/>
                    )
                }):<div style={{height:'50vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}><div style={{fontSize: '2rem', fontWeight: '600'}}>No product Found !!!</div></div>
            }
        </div>
    );
}

export default FilteredProducts;
