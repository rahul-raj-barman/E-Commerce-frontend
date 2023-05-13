import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { actionCreators } from '../states';
import { BASE_URL } from '../config';
import './productDetails.css'
import Review from '../components/Review';
import cartContext from '../context/CartContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'


const ProductDetails = () => {
    const [currentDeatails, setCurrentDetails] = useState({})
    const [ratings, setRatings] = useState();
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState()
    const [aggregateRating, setAggregateRating] = useState(0);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const update = useSelector(state => state.update)

    var id = localStorage.getItem("id")
    var userId = localStorage.getItem("user_id")
    const a = useContext(cartContext)
    useEffect(() => {
        axios.get(`${BASE_URL}/getproductbyid/${id}`)
        .then((result) => {
            // console.log(result.data.product)
                setCurrentDetails(result.data.product)
                setReviews(result.data.product.reviews)
                // console.log(product)
            })
        .catch((err) => {
            console.log(err)
        })
    },[update])

    useEffect(() => {
        console.log(reviews)
    },[reviews])


    const addReview = (e) => {

        if(!localStorage.getItem('userToken')) {
            Swal.fire({
            title: 'You are not logged In!!!',
            text: "Go to login?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login')
        }
    })
        }
        console.log(ratings)
        const pid = (currentDeatails._id)
        const obj = {
            user: userId, 
            rating: ratings,
            text : comment
        }
        axios.post(`${BASE_URL}/addreview/${pid}`, obj)
        .then((result) => {
            console.log(result)
            dispatch(actionCreators.updateData('update'))
            setComment("")
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Review Added'
              })
        })
        .catch((err) => {
            console.log(err)
        })


    }

    const addToCart = () => {
        if(!localStorage.getItem('userToken')) {
            Swal.fire({
            title: 'You are not logged In!!!',
            text: "Go to login?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login')
        }
        })
        return;
    }
        a.increaseCount();
        const quantity = 0;
        const _id = id;
        const cartObj = {
            _id, quantity ,  userId
        }
        console.log(_id);
        console.log(quantity)
        console.log(userId)
        axios.post(`${BASE_URL}/addtocart`,{_id, quantity, userId, image: currentDeatails.image})
        .then((result) => {
            console.log(result)

        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        let totalRating = 0;
        let numberOfRatings = 0;
        reviews && reviews.map((e) => {
            if(e.rating) {
                totalRating += e.rating;
                numberOfRatings++;
            }
        })
        setAggregateRating(totalRating/numberOfRatings)
    }, [reviews])

    useEffect(() => {

    }, [aggregateRating])

    return (
        <>
        <div className='container-fluid'>
           <div className="row p-4 d-flex justify-content-between main-cont">
            <div className="col-4 img-cont">
                <img src={`http://localhost:5000/images/${currentDeatails.image}`} id='product-img' alt="not found" />
            
            </div>
            <div className="col-3 ms-2 me-2 mt-4 about-product">
                
            <div className="title">{currentDeatails.name}</div>

            <hr />

            <div className="rating d-flex justify-content-center">
            <span  className='me-2 stars'>
            <i class="fa fa-star" aria-hidden="true" style={{color : aggregateRating >= 1 ? "gold" : 'whitesmoke'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color : aggregateRating >= 2 ? "gold" : 'whitesmoke'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color : aggregateRating >= 3 ? "gold" : 'whitesmoke'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color : aggregateRating >= 4 ? "gold" : 'whitesmoke'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color : aggregateRating >= 5 ? "gold" : 'whitesmoke'}}></i>
            </span>
             <span className='text text-star'>{reviews ? reviews.length : 0} reviews</span>
            </div>
            <hr />
            <div className="price text d-flex justify-content-around">
                <span>Price : </span> <span>${currentDeatails.price}</span>
            </div>
            
            <hr />

            <div className="description text d-flex justify-content-around">
                
                <span>
                <span className="desc">
                Description : &nbsp;   
                </span>
                      {currentDeatails.description}
                </span>
            </div>

            </div>
            <div className="col-2 mt-4 about-seller">
                <div className="name text">Seller</div>
                <div className="seller-name text-success"><a href="#">Puma</a></div>
                <div className="seller-rating text-warning">
                {
                    
                }
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <span className='seller-review-count text-warning'>100 reviews</span>
                </div>
                <hr />
                <div className="product-price text">
                    <span>Price:</span>
                    <span>${currentDeatails.price}</span>
                
                </div>
                <hr />
                <div className="product-status text">
                    <span>Status:</span>
                    <span>In Stock</span>
                </div>
                <hr />
                <div className="add-to-cart ">
                    <button className='addtocart' onClick={() => addToCart()}>Add to Cart</button>
                </div>
            </div>
           </div>

           {
            reviews? reviews.map((product) => {
                return(
                    <Review comment = {product.text} rating = {product.rating}/>

                )
         
            }):null
           }
           
                    <div className="add-review">
                    
                        <div className="heading">
                            Write a customer review
                        </div>

                        <div className="review-form">
                            
                                <label htmlFor="rating">Rating</label>
                                <select name="ratings" id="rating" value={ratings} onChange={(e) => setRatings(e.target.value)}>
                                    <option value="1 - Bad">1 - Bad</option>
                                    <option value="2 - Not good">2 - Not good</option>
                                    <option value="3 - Medium">3 - Medium</option>
                                    <option value="4 - Good">4 - Good</option>
                                    <option value="5 - Very">5 - Very Good</option>
                                
                                </select>
                                <br />
                                <textarea name="comment" id="addComment" cols="30" rows="4" placeholder='add a comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                <br />
                                <button onClick={(e) => addReview(e)}>
                                    Submit
                                </button>
                        
                        </div>
                    </div>
                
                
                </div>

        </>
    );
}

export default ProductDetails;
