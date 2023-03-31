import React from 'react';
import './previewOrder.css'

const PreviewOrder = () => {
    return (
        <>
           <div className="container-fluid">

            <div className="row mt-4 ms-2 me-2">
            
            <div className="col-lg-7 col-sm-10">
            
                <div className="row">
                
                    <div className="col-12">
                        <div className="row">
                
                    <div className="col-12">

                    <div className='shipping-cont'>
                    <div className='custom-text'>Shipping</div>
                    <div>Name: <span>Rahul Raj</span></div>
                    <div>Address: <span>Us canada Uk australia</span></div>
                    <div >
                    <a className='text-primary' href="#">Edit</a>
                </div>
                </div>

                    </div>
                
                </div>
                    
                    </div>
                
                </div>

                <div className="row">
                
                    <div className="col-12">
                        <div className="payment">
                            <div>Payment</div>
                            <div>Method: <span>Paypal</span></div>
                            <div><a href="#" className='text-primary'>Edit</a></div>
                        </div>
                    
                    </div>
                
                </div>

                <div className="row">
                
                    <div className="col-12 mt-5">
                    <span className='custom-text'>Items</span>
                    <div className="product mt-2">
                    
                    <div className="product-img">
                    
                    <img src="https://images.unsplash.com/photo-1680028136470-5a957bc07a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="not found" />
                    
                    </div>
    
                    <div className="product-name">Nike Slim Shirt</div>
                
                
                <div className="product-count">
                
                <span className='counter'> 2 </span>

                
                </div>
            <div className="price">$100</div>
                    
                    </div>
                
                </div>
            
            </div>
            </div>
            
            <div className="col-lg-4 col-sm-10">
                <div className="summary-order">
                
                    <div>
                        <div>Items</div>
                        <div>$120.00</div>
                    </div>
                    <hr />

                    <div>
                        <div>Items</div>
                        <div>$120.00</div>
                    </div>
                    <hr />

                    <div>
                        <div>Items</div>
                        <div>$120.00</div>
                    </div>
                    <hr />

                    <div>
                        <div>Items</div>
                        <div>$120.00</div>
                    </div>
                    <hr />

                    <button>Place Order</button>
                
                </div>
            
            </div>

            </div>
           
           </div>
        </>
    );
}

export default PreviewOrder;
