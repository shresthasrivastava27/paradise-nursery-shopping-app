import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link
          to="/cart"
          className="cart-link"
          aria-label={`Cart with ${totalItems} items`}
        >
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>

          <span>Cart</span>

          <span className="cart-badge">
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
}
