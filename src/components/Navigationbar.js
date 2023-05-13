import React, {useState, useRef, useEffect, useContext} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import { actionCreators } from "../states";
import './navigationbar.css'
import logo from '../nav-images/logo.png';
import cartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2'


let Navigationbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const list = useRef(null);
  const [visibilityman, setVisibilityman] = useState('hidden');
  const [visibilitywoman, setVisibilitywoman] = useState('hidden');
  const [visibilitykid, setVisibilitykid] = useState('hidden');
  const [search, setSearch] = useState("")
  const [profileNav, setProfileNav] = useState(false)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cartVal = useContext(cartContext)
  
  let user = localStorage.getItem('user')
  

  const searchitem = useSelector(state => state.search)
   
  useEffect(() => {
    dispatch(actionCreators.searchData(search.toLowerCase()))
    console.log(search)
  }, [search])

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

  const handleProfileClick = () => {
    if(!localStorage.getItem('userToken')) {
      swal.fire({
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
  else{
    setProfileNav(!profileNav)
  }
  }

  useEffect(() => {
    const user_id = localStorage.getItem("user_id")
      axios.get(`${BASE_URL}/cartitemcount/${user_id}`)
      .then((result) => {
        setCartItemCount(result.data.userFound[0].cart.length)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  const handleLogout = (e) => {
    localStorage.removeItem('user_id');
    navigate('/login');
  }

  const handleAdminAccess = () => {
    if(!localStorage.getItem('userToken')) {
      navigate('/login')  
      swal.fire(
        "Log in as Admin"
      )
    return;
}
    user = JSON.parse(user);
    if(user.isAdmin) {
      navigate('admin/addproduct')
    }
    else {
      navigate('/login')
      swal.fire(
        "Log in as Admin"
      )
    }
  }

  const handleProductClick = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement.classList[1])
    const words = e.target.parentElement.parentElement.parentElement.classList[1].split(/[\s-]+/);
    console.log(words)
    localStorage.setItem('current-page',words[1])
    navigate('/products');
    dispatch(actionCreators.updateData('update'))
  }

  const handleCart = () => {
    if(!localStorage.getItem('userToken')) {
      swal.fire({
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
  navigate('/cart')
  }

  const handleNavDrop = (e) => {
    const elem = document.querySelector('.row-attack')
    console.log(elem.classList)
    if(elem.classList.contains('cont-min')){
      elem.classList.remove('cont-min')
    }
    else {
      elem.classList.add('cont-min')
    }
    
  }

  return (
    <>

    <div className="container-fluid cont">
      <div className="row row-attack d-flex justify-content-center">
        <div className="col-12 d-flex flex-row d-flex justify-content-between nav-box ">
          <div className="logo" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo not found" style={{width: "140px", marginBottom: "0"}} />
          </div>

          <div className="search-box">
            <input type="text" name="" id="" value={search} onChange = {(e) => setSearch(e.target.value)}/>
            <div>Search</div>
          </div>

        <div className="admin-nav custom-text text-nav" onClick={handleAdminAccess}>
          ADMIN
        </div>

        <div className="seller-nav custom-text text-nav">
          SELLER
        </div>
        <div className="d-flex flex-row acc-cart">
          <div className="cart-nav me-4 mt-1" style={{position: 'relative'}}>
          <span onClick={handleCart}>
          <i class="fa-sharp fa-solid   fa-cart-shopping" style={{color : "rgb(247,247,249)"}}></i>
          <div style={{height: '20px', width: '20px', backgroundColor: '#d64161', borderRadius: '50%', textAlign: 'center', fontSize: '.8rem', position: 'absolute', top: '-14px', left: '16px', color: "whitesmoke"}}>{cartVal.count+cartItemCount}</div>
          </span>
          

          </div>
          <div className="my-account" onClick={(e) => handleProfileClick(e)}>
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

                    <ul>
                      <li onClick={(e) => handleProductClick(e)}>Shirts</li>
                      <li onClick={(e) => handleProductClick(e)}>Casual Shirts</li>
                      <li onClick={(e) => handleProductClick(e)}>Jackets</li>
                      <li onClick={(e) => handleProductClick(e)}>Suits</li>
                      <li onClick={(e) => handleProductClick(e)}>Sweaters</li>
                    </ul>
                  
                  </div>

                  
                
                </div>
             
          </li>
          <li onMouseOver={(e) => handleHoverWoman(e)} onMouseLeave={(e) => {
            handleHoverWoman(e)
          }}> <a href="#" >WOMAN</a>
          <div className="drop drop-women"  style={{visibility: visibilitywoman}}>
            
              <div className="drop-items">
                <ul>
                  <li onClick={(e) => handleProductClick(e)}>Shirts</li>
                  <li onClick={(e) => handleProductClick(e)}>Casual Shirts</li>
                  <li onClick={(e) => handleProductClick(e)}>Jackets</li>
                  <li onClick={(e) => handleProductClick(e)}>Suits</li>
                  <li onClick={(e) => handleProductClick(e)}>Sweaters</li>
                </ul>
              
              </div>
            
            </div>
            
          
          
          </li>
          <li onMouseOver={(e) => handleHoverKid(e)} onMouseLeave={(e) => {
            handleHoverKid(e)
          }}><a href="#" >KIDS</a>
          
         <div className="drop drop-kid"  style={{visibility: visibilitykid}}>
            
              <div className="drop-items">
                <ul>
                  <li onClick={(e) => handleProductClick(e)}>Shirts</li>
                  <li onClick={(e) => handleProductClick(e)}>Casual Shirts</li>
                  <li onClick={(e) => handleProductClick(e)}>Jackets</li>
                  <li onClick={(e) => handleProductClick(e)}>Suits</li>
                  <li onClick={(e) => handleProductClick(e)}>Sweaters</li>
                </ul>
              
              </div>
            
            </div>
          
          </li>
        </ul>
      
      </div>
    </div>

    {
      profileNav ? <div className="profile-dropdown">
      <ul>

        <li onClick={() => setProfileNav(!profileNav)}><NavLink className ="nav-link" to={`myprofile`}>User Profile</NavLink> </li>
        <li onClick={() => setProfileNav(!profileNav)}><NavLink className ="nav-link" to={`/orderhistory`}>Orders History</NavLink> </li>
        <hr style={{color: 'white'}}/>
        <li onClick={(e) => handleLogout(e)}>Logout</li>
      
      </ul>

</div>:null
    }
    <div className="drop-button" onClick={(e) => handleNavDrop(e)}>
    <i class="fa-solid fa-bars"></i>
    </div>
    </div>
   
    <Outlet/>
    </>
  );
}

export default Navigationbar;