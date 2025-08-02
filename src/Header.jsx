import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/header.css';

const Header = () => {
    return (
        <nav className="navStyle">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}>Home</NavLink>
            <NavLink to="/users" className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}>Users</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}>About</NavLink>
        </nav>
    )
}

export default Header;