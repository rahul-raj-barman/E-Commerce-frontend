import React, { useState, useEffect } from 'react';
import Featuredproduct from './Featuredproduct';
import { BASE_URL } from '../config';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {actionCreators} from '../states/index'


const FeaturedProductContainer = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemPerPage] = useState(3);
  
    
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`${BASE_URL}/allproducts`)
        .then((products) => {
            setAllProducts(products.data)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])

    useEffect(() => {
        let lastIndex = itemsPerPage * currentPage;
        let firstIndex = lastIndex - itemsPerPage;
        const newProducts = allProducts.slice(firstIndex, lastIndex);
        console.log(newProducts)
    
        dispatch(actionCreators.updateProducts(allProducts));
        dispatch(actionCreators.updateProducts(allProducts));
        // console.log(allProducts)

    }, [allProducts, currentPage, itemsPerPage, dispatch])


    return (
        <div className='d-flex flex-wrap justify-content-center align-items-center p-4 mt-4' style={{height:"80vh", background:'yellow'}}>
            <Featuredproduct/>
        </div>
    );
}

export default FeaturedProductContainer;
