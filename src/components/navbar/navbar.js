import React from 'react';
import '../navbar/navbar.css';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='main'>
      <Link to="/">
        <FaShoppingBag className='logo' />
      </Link>
      <ul>
        <li className='title'>STYLECRAFT</li>
        <li className='wea'><Link to="/Men">Men</Link></li>
        <li className='wea'><Link to="/Women">Women</Link></li>
        <li className='wear'><Link to="/Kids">Kids</Link></li>
        <li className='we'><Link  to="/Login">Login</Link></li>
        <li className='we'><Link  to="/Register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
