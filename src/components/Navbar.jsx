import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
export default function Navbar(){const total=useSelector(s=>s.cart.items.reduce((n,i)=>n+i.quantity,0));return <nav className="navbar"><Link to="/" className="brand">Paradise Nursery</Link><div className="nav-links"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/cart">Cart <span className="cart-badge">{total}</span></Link></div></nav>}
