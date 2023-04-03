/*eslint-disable*/

import React, { useState } from 'react'
import {useSelector} from 'react-redux'

function Featuredproduct(newProducts) {
  let products = useSelector(state => {
    return state.product;
})

  return (
    <>
    {
   
      newProducts.length ? products.map((obj) => {
        return(
          <div class="card" style={{width: "16rem", marginBottom:'20px', marginLeft:"20px", marginRight: "20px"}}>
  <img class="card-img-top" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Cardcap"/>
  <div class="card-body">
      <h5 class="card-title"> {obj.name}</h5>
      <p class="card-text">{obj.description}</p>
      <a href='#' class="btn ms-5" style={{
          backgroundColor:'#dd7973',
          fontFamily: 'monospace',
          width:'140px',
          height: '36px',
          paddingBottom: '20px',
          paddingTop: '6px'
      }}>See details</a>
    </div>
  </div>
        )
      }) : null
    }
    </>
  )
}

export default Featuredproduct