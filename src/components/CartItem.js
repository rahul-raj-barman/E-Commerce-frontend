import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../config'
import { actionCreators } from '../states'
import './cartItem.css'

function CartItem(props) {

    let [count, setCount] = useState(1)

    const dispatch = useDispatch();
    const update = useSelector(state => state.update)

    const user_id = localStorage.getItem("user_id")
    let decreaseCount = (pid) => {
        if(count > 0) setCount(count-1)
        const _id = pid;
        const userId = user_id
        const obj = {
            _id, userId
        }
        axios.post(`${BASE_URL}/decreasecount`, obj)
        .then((result) => {
            console.log('done')
        })
        .catch((err) => {
            console.log(err)
        })

        
    }

    let increaseCount = (pid) => {
        setCount(count+1);
        const _id = pid;
        const userId = user_id
        const obj = {
            _id, userId
        }
        axios.post(`${BASE_URL}/increasecount`, obj)
        .then((result) => {
            console.log('done')
        })
        .catch((err) => {
            console.log(err)
        })

    }
    

    let delProduct = (id) => {
        console.log("going to dispatch")
        console.log(update)
        const body = {
            id: localStorage.getItem('user_id')
        }
        axios.delete(`${BASE_URL}/delproduct/${id}`, { data: body })
        .then((data) => {
            console.log(data)
            dispatch(actionCreators.updateData('update'))
        })
        .catch((err) => {
            console.log(err)
        })
       
    }

  return (

        <div className="cart-item">
        
            <div className="product">
                <div className="product-img">
                
                <img src={`http://localhost:5000/images/${props.image}`} alt="not found" />
                
                </div>

                <div className="product-name">{props.name}</div>
                </div>

                {
            //         </div>
            // <div className="product-count">
            // <i class="fa-solid fa-circle-minus minus" onClick={() => decreaseCount(props.pid)}></i>
            // <span className='counter'> {props.count} </span>

            // <i class="fa-solid fa-circle-plus plus" onClick={() => increaseCount(props.pid)}></i>
            
            // </div>
                }
            
        <div className="price">${props.price}</div>
        <div className="del-product" onClick={() => delProduct(props.pid)}><i class="fa-solid fa-trash"></i></div>
        </div>

  )
}

export default CartItem