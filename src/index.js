import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Cart from './pages/Cart';
import App from './App';
import Homepage from './pages/Homepage';
import Shipping from './pages/Shipping';
import PaymentPage from './pages/Payment';
import Navigationbar from './components/Navigationbar';
import { Provider } from 'react-redux';
import { store } from './states/store';
import ProductDetails from './pages/ProductDetails';
import priceState from './context/priceState';
import Userprofile from '../src/pages/Userprofile'
import Orderhistory from './pages/Orderhistory'
import './index.css';
import Adminnav from './components/Adminnav';
import Orders from './pages/Orders';
import Addproduct from './components/Addproduct';
import Admin from './pages/Admin';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PreviewOrder from './pages/PreviewOrder';
import Signup from './pages/Signup';
import Paypal from './pages/Paypal';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/previeworder",
        element: <PreviewOrder/>
      },

      {
        path: "/payment",
        element: <PaymentPage/>
      },
      {
        path: "/shipping",
        element: <Shipping/>
      },
      {
        path: "/myprofile",
        element: <Userprofile/>,
      },
      {
        path: "/orderhistory",
        element: <Orderhistory/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: '/productDetails',
        element : <ProductDetails/>

      }
      
    ],
    
  },
  {
    path: "/admin/addproduct",
    element: <><Admin/><Addproduct/></>,
  
  },
  {
    path: "/admin/orders",
    element: <><Admin/><Orders/></>,
  
  },

  {
    path: "/login",
    element: <Login/>,

  },
  {
    path: "/paypal",
    element: <Paypal/>,

  },
  {
    path: "/signup",
    element: <Signup/>,

  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <priceState>
    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
  </priceState>
    
  </React.StrictMode>
);
