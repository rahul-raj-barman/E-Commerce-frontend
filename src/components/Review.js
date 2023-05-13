import React, { useEffect } from "react";
import { useState } from "react";

const Review = (props) => {
    const [rating, setRating] = useState(0)
    useEffect(() => {
        setRating(props.rating)
    }, [props])
    return (

        <div className="row">
        <div className="col-10">
            <div className="review-cont">
                <div className="added-review">
                    <span className='customer-name'>Rahul</span>
                    <span className='rating-given text-warning'>
                    <i class="fa fa-star" aria-hidden="true" style={{color : rating >= 1 ? "gold" : '#7a7a7a'}}></i>
                    <i class="fa fa-star" aria-hidden="true" style={{color : rating >= 2 ? "gold" : '#7a7a7a'}}></i>
                    <i class="fa fa-star" aria-hidden="true" style={{color : rating >= 3 ? "gold" : '#7a7a7a'}}></i>
                    <i class="fa fa-star" aria-hidden="true" style={{color : rating >= 4 ? "gold" : '#7a7a7a'}}></i>
                    <i class="fa fa-star" aria-hidden="true" style={{color : rating >= 5 ? "gold" : '#7a7a7a'}}></i>
                    </span>
                    <span className="review-date">
                        2022-10-9
                    </span>
                    <span className='review-comment'>{props.comment}</span>
                    
                
                </div>

        </div>
        </div>
        </div>
    );
}

export default Review;
