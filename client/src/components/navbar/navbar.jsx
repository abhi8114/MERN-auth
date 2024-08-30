import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../../assets/logo.jpg'
import cart from '../../assets/cart.jpg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <div className="navbar-cart">
        <Link to="/cart"><img src={cart} alt="" /></Link>
      </div>
      </ul>
    </nav>
  );
};

export default Navbar;
