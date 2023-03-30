import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductDetails from './pages/ProductDetails';

import './App.css';


function App() {
  return (
    <div className='app'>
      <ProductDetails/>
    </div>
  );
}

export default App;
