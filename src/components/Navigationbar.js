import React, {useState, useRef} from "react";
import 'react-bootstrap'
import './navigationbar.css'
import logo from '../nav-images/logo.png';



let Navigationbar = () => {
  
  const list = useRef(null);
  const [visibilityman, setVisibilityman] = useState('visible');
  const [visibilitywoman, setVisibilitywoman] = useState('hidden');
  const [visibilitykid, setVisibilitykid] = useState('hidden');

  const handleHoverMan = (e) => {
    console.log(e.target)
    if(e.type==='mouseover') setVisibilityman('visible')
    else setVisibilityman('hidden')

  }

  const handleHoverWoman = (e) => {
    console.log(e.target)
    if(e.type==='mouseover') setVisibilitywoman('visible')
    else setVisibilitywoman('hidden')

  }

  const handleHoverKid = (e) => {
    console.log(e.target)
    if(e.type==='mouseover') setVisibilitykid('visible')
    else setVisibilitykid('hidden')

  }

  return (
    <div className="container-fluid cont">
      <div className="row d-flex justify-content-center">
        <div className="col-11 d-flex flex-row d-flex justify-content-between nav-box">
          <div className="logo">
            <img src={logo} alt="Logo not found" style={{width: "140px", marginBottom: "0"}} />
          </div>

          <div className="search-box">
            <input type="text" name="" id="" />
            <i class="fa-solid fa-magnifying-glass"> Search</i>
          </div>

        <div className="admin-nav custom-text">
          ADMIN
        </div>

        <div className="seller-nav custom-text">
          SELLER
        </div>
        <div className="d-flex flex-row">
          <div className="cart-nav me-4 mt-1">
          <i class="fa-sharp fa-solid   fa-cart-shopping"></i>

          </div>
          <div className="my-account">
          <i class="fa-solid fa-user"></i>
          </div>
        </div>

      </div>
    </div>
    <div className="row d-fex flex-row justify-content-center list-secontion-cont">
      <div className="col-6 list-cont">
        <ul className="nav-list">
          <li className="man-list-item"  onMouseOver={(e) => handleHoverMan(e)} onMouseLeave={(e) => {
            handleHoverMan(e)
          }}> <a href="#">MAN</a>
              <div className=" drop drop-men" ref={list} style={{visibility: visibilityman}}>
                
                  <div className="drop-items">
                  
                    <h3>Topwear</h3>
                    <ul>
                      <li>Shirts</li>
                      <li>Casual Shirts</li>
                      <li>Jackets</li>
                      <li>Suits</li>
                      <li>Sweaters</li>
                    </ul>
                  
                  </div>

                  <div className="drop-items">
                  
                  <h3>Topwear</h3>
                    <ul>
                      <li>Shirts</li>
                      <li>Casual Shirts</li>
                      <li>Jackets</li>
                      <li>Suits</li>
                      <li>Sweaters</li>
                    </ul>
                  
                  
                  </div>

                  <div className="drop-items">
                  
                  <h3>Topwear</h3>
                  <ul>
                    <li>Shirts</li>
                    <li>Casual Shirts</li>
                    <li>Jackets</li>
                    <li>Suits</li>
                    <li>Sweaters</li>
                  </ul>
                  
                  
                  </div>
                
                </div>
             
          </li>
          <li onMouseOver={(e) => handleHoverWoman(e)} onMouseLeave={(e) => {
            handleHoverWoman(e)
          }}> <a href="#" >WOMAN</a>
          <div className="drop drop-women"  style={{visibility: visibilitywoman}}>
            
              <div className="drop-items">
              
                <h3>Topwear</h3>
                <ul>
                  <li>Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Jackets</li>
                  <li>Suits</li>
                  <li>Sweaters</li>
                </ul>
              
              </div>

              <div className="drop-items">
              
              <h3>Topwear</h3>
                <ul>
                  <li>Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Jackets</li>
                  <li>Suits</li>
                  <li>Sweaters</li>
                </ul>
              
              
              </div>

              <div className="drop-items">
              
              <h3>Topwear</h3>
              <ul>
                <li>Shirts</li>
                <li>Casual Shirts</li>
                <li>Jackets</li>
                <li>Suits</li>
                <li>Sweaters</li>
              </ul>
              
              
              </div>
            
            </div>
            
          
          
          </li>
          <li onMouseOver={(e) => handleHoverKid(e)} onMouseLeave={(e) => {
            handleHoverKid(e)
          }}><a href="#" >KIDS</a>
          
         <div className="drop drop-kid"  style={{visibility: visibilitykid}}>
            
              <div className="drop-items">
              
                <h3>Topwear</h3>
                <ul>
                  <li>Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Jackets</li>
                  <li>Suits</li>
                  <li>Sweaters</li>
                </ul>
              
              </div>

              <div className="drop-items">
              
              <h3>Topwear</h3>
                <ul>
                  <li>Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Jackets</li>
                  <li>Suits</li>
                  <li>Sweaters</li>
                </ul>
              
              
              </div>

              <div className="drop-items">
              
              <h3>Topwear</h3>
              <ul>
                <li>Shirts</li>
                <li>Casual Shirts</li>
                <li>Jackets</li>
                <li>Suits</li>
                <li>Sweaters</li>
              </ul>
              
              
              </div>
            
            </div>
          
          </li>
        </ul>
      
      </div>
    </div>
    </div>
  );
}

export default Navigationbar;