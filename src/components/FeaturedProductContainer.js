import React, { useState, useEffect } from 'react';
import Featuredproduct from './Featuredproduct';
import './featuredproduct.css'
import { BASE_URL } from '../config';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {actionCreators} from '../states/index'


const FeaturedProductContainer = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemPerPage] = useState(8);
    const [activePage, setActivePage] = useState()
    const [currentPosts, setCurrentPosts] = useState([])
    const [buttons, setButtons] = useState()
    const userToken = localStorage.getItem("userToken")
    
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

    // useEffect(() => {
    //     window.addEventListener('resize', (e) => {
    //         console.log(window.innerWidth)
    //         if(window.innerWidth < 1231) {
    //             setItemPerPage(4)
    //         }
    //         if(window.innerWidth < 760) {
    //             setItemPerPage(2)
    //         }
    //         if(window.innerWidth){
                
    //         }
    //     })

    // }, [])

    const handlePagination = (page) => {
        setCurrentPage(page)
    }

    useEffect(() => {
    const lastPostIndex = currentPage * itemsPerPage;
    const firstPostIndex = lastPostIndex - itemsPerPage;

    setCurrentPosts(allProducts.slice(firstPostIndex, lastPostIndex));

    }, [allProducts, currentPage])

    
    useEffect(() => {
    var pages = [];
    console.log(allProducts)
    console.log(allProducts.length / itemsPerPage)
    for(let i = 1; i <= Math.ceil(allProducts.length / itemsPerPage); i++) {
        
        pages.push(i)
    }
    setButtons(pages)
    }, [allProducts])

    

    // useEffect(() => {
    //     let lastIndex = itemsPerPage * currentPage;
    //     let firstIndex = lastIndex - itemsPerPage;
    //     const newProducts = allProducts.slice(firstIndex, lastIndex);
    //     console.log(newProducts)
    
    //     dispatch(actionCreators.updateProducts(allProducts));
    //     dispatch(actionCreators.pageProducts(newProducts));
    //     // console.log(allProducts)

    // }, [allProducts, currentPage, itemsPerPage, dispatch])

   

    useEffect(() => {
        console.log(currentPage)
    },[currentPage])

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{
        fontSize: '1.8rem', fontWeight: 600, position:'relative', marginBottom: '-4vh', fontWeight: '370', letterSpacing: '3px'}}>Featured Products</div>
        <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ position: 'relative', width:'100vw'}}>
            {
                currentPosts ? currentPosts.map((post) => {
                    console.log(post)
                    return (
                        <Featuredproduct
                        image = {post.image}
                        title ={post.name}
                        id={post._id} desc = {post.description}/>
                    )
                }):null
            }
            
        </div>
        <div>
        {
            buttons ? buttons.map((ind) => {
                return(
                    <button style={{margin: "5px"}} onClick = {() => handlePagination(ind)}>{ind}</button>
                )
            }):null
        }
        </div>
        </div>
    );
}

export default FeaturedProductContainer;
