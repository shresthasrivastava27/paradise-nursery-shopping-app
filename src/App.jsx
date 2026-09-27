import {Link,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';
function HomePage(){return <><Navbar/><main className="landing-page"><section className="hero-card"><div className="hero-copy"><p className="eyebrow">Welcome to Paradise Nursery</p><h1>Bring a little paradise home.</h1><p>Explore beautiful houseplants, discover easy-care favorites, and build your own plant collection with our simple shopping experience.</p><div className="hero-actions"><Link to="/plants" className="primary-btn link-btn">Get Started</Link><Link to="/about" className="secondary-btn link-btn">About Us</Link></div></div></section></main></>}
export default function App(){return <Routes><Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutUs/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/></Routes>}
