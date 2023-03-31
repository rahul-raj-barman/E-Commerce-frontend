import React, {useState} from 'react'
import './cartItem.css'

function CartItem() {

    let [count, setCount] = useState(1)

    let decreaseCount = () => {
        if(count > 0) setCount(count-1)
        else return;
    }

    let increaseCount = () => {
        setCount(count+1);
    }

  return (

        <div className="cart-item">
        
            <div className="product">
                <div className="product-img">
                
                <img src="https://images.unsplash.com/photo-1680028136470-5a957bc07a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="not found" />
                
                </div>

                <div className="product-name">Nike Slim Shirt</div>
            
            </div>
            <div className="product-count">
            <i class="fa-solid fa-circle-minus minus" onClick={() => decreaseCount()}></i>
            <span className='counter'> {count} </span>

            <i class="fa-solid fa-circle-plus plus" onClick={() => increaseCount()}></i>
            
            </div>
        <div className="price">$100</div>
        <div className="del-product"><i class="fa-solid fa-trash"></i></div>
        </div>

  )
}

export default CartItem