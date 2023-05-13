// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import PaymentPage from './pages/Payment';
import PreviewOrder from './pages/PreviewOrder';
import FeaturedProductContainer from './components/FeaturedProductContainer';
import Review from './components/Review';
import CartState from './context/CartState';
import priceState from './context/priceState';


function App() {
  return (
    <CartState>
    <div style={{position: 'relative', left: '-10px'}}>
      <Navigationbar/>   
    </div>
    </CartState>
  );
}

export default App;
