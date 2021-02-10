import React from 'react';
import logo from '../statics/Logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (
        
        <nav>
        <ul>
        <div className='navbar container'>
        <div className="logo">
        <li><img src={logo} alt='Logo' /></li>
        </div>
        <div className="items">
        <li>REGISTER</li>
        <li>LOGIN</li>
        <li>ABOUT</li>
        </div>
        </div>
        </ul>
        </nav>
        
    )
}

export default Navbar;