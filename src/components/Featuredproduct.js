/*eslint-disable*/

import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { actionCreators } from '../states/index';
import sampleImg from './images/im.jpg' 

function Featuredproduct(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let products = useSelector(state => {
    return state.product;
})
useEffect(() => {
  console.log("Props")
  console.log(props.image)
},[props])

let page = useSelector(state => state.page)

  let goToDetails = (e) => {
   localStorage.setItem("id", e)
    console.log(e)
    navigate("/productDetails")
  }

  return (
    <>
          <div class="card" style={{width: "15rem", marginBottom:'20px', marginLeft:"20px", marginRight: "20px", padding: '14px', marginTop: '5vh'}}>
  <img class="card-img-top" src={`http://localhost:5000/images/${props.image}`} alt="Cardcap" height='200px'/>
  <div class="card-body">
      <h5 class="card-title"> {props.title}</h5>
      <p class="card-text">{props.desc}</p>
      <a href='#' class="btn ms-2 see-datails" onClick={() => goToDetails(props.id)}>See details</a>
    </div>
  </div>
    </>
  )
}

export default Featuredproduct