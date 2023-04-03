import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Cart from './pages/Cart';
import App from './App';
import Homepage from './pages/Homepage';
import Navigationbar from './components/Navigationbar';
import { Provider } from 'react-redux';
import { store } from './states/store';

import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    // children: [
    //   {
    //     path: "/",
    //     element: <Homepage/>,
    //   },
    //   {
    //     path: "/myprofile",
    //     element: <Login/>,
    //   },
    //   {
    //     path: "/cart",
    //     element: <Cart/>,
    //   },
    // ],
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);
