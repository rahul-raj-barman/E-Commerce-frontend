import React from 'react';
import './productDetails.css'

const ProductDetails = () => {
    return (
        <>
        <div className='container-fluid'>
           <div className="row p-4 d-flex justify-content-between main-cont">
            <div className="col-6 img-cont">
                <img src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" id='product-img' alt="not found" />
            
            </div>
            <div className="col-2 ms-2 me-2 mt-4 about-product">
                
            <div className="title">Formal Shirt White</div>

            <hr />

            <div className="rating d-flex justify-content-center">
            <span className='me-2'>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            </span>
             <span className='text'>4 reviews</span>
            </div>
            <hr />
            <div className="price text d-flex justify-content-around">
                <span>Price : </span> <span>13$</span>
            </div>
            
            <hr />

            <div className="description text d-flex justify-content-around">
                <span className="desc">
                    Description:  
                </span>
                <span className='about text'>
                     High quality shirts
                </span>
            </div>

            </div>
            <div className="col-2 mt-4 about-seller">
                <div className="name text">Seller</div>
                <div className="seller-name text-success"><a href="#">Puma</a></div>
                <div className="seller-rating text-warning">
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
                    <span>$120</span>
                
                </div>
                <hr />
                <div className="product-status text">
                    <span>Status:</span>
                    <span>In Stock</span>
                </div>
                <hr />
                <div className="add-to-cart ">
                    <button>Add to Cart</button>
                </div>
            </div>
           </div>
           
           <div className="row">
            <div className="col-10">
                <div className="review-cont">
                    <div className="heading">Reviews</div>

                    <div className="added-review">
                        <span className='customer-name'>Rahul</span>
                        <span className='rating-given text-warning'>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        </span>
                        <span className="review-date">
                            2022-10-9
                        </span>
                        <span className='review-comment'>Great T-shirt</span>
                        
                    
                    </div>

                    <div className="add-review">
                    
                        <div className="heading">
                            Write a customer review
                        </div>

                        <div className="review-form">
                            
                                <label htmlFor="rating">Rating</label>
                                <select name="ratings" id="rating">
                                    <option value="1 - Bad">1 - Bad</option>
                                    <option value="2 - Not good">2 - Not good</option>
                                    <option value="3 - Medium">3 - Medium</option>
                                    <option value="4 - Good">4 - Good</option>
                                    <option value="5 - Very">5 - Very</option>
                                
                                </select>
                                <br />
                                <textarea name="comment" id="addComment" cols="30" rows="4" placeholder='add a comment'></textarea>
                                <br />
                                <button>
                                    Submit
                                </button>
                        
                        </div>
                    </div>
                
                
                </div>
            
            </div>
           </div>

        </div>
        </>
    );
}

export default ProductDetails;
