import React from 'react';
import './homepage.css'

const Homepage = () => {
    return (
       <>

       <div id="carouselExampleControls" class="carousel slide mt-4" data-ride="carousel">
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img class="d-block" style={{height: "55vh", width: "100vw"}} src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="First slide"/>
         </div>
         <div class="carousel-item">
           <img class="d-block w-100" src="..." alt="Second slide"/>
         </div>
         <div class="carousel-item">
           <img class="d-block w-100" src="..." alt="Third slide"/>
         </div>
       </div>
       <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
       </a>
     </div>


     <section class="featured-products">
  <h2>Featured Products</h2>
  <div class="products-container">
    <div class="product">
      <img src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="Product 1"/>
      <h3>Product 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="Product 2"/>
      <h3>Product 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="Product 3"/>
      <h3>Product 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Add to Cart</button>
    </div>
  </div>
</section>


       </>


    );
}

export default Homepage;
