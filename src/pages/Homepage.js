import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import './homepage.css'
import FeaturedProductContainer from '../components/FeaturedProductContainer';
import Carousel from '../components/Carousel';
import { useSelector } from 'react-redux';
import FilteredProducts from '../components/FilteredProducts';

const Homepage = () => {
    const search = useSelector(state => state.search)

    useEffect(() => {
        console.log('search is')
    console.log(search)
    }, [search])
    

    return (
       <div className='home-cont'>

        {
            !search ? <><Carousel/>
            <FeaturedProductContainer/>
            <Footer/></>:<><FilteredProducts/><Footer/></>
        }

        
       

       </div>


    );
}

export default Homepage;
