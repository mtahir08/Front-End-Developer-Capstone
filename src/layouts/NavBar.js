import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './NavBar.css';

function NavBar() {
  const navRef = useRef(null);

  const toggleNav = () => {
    navRef.current.classList.toggle('active');
  };

  return (
    <nav>
      <Link to='/'>
        <img src={Logo} alt='Little Lemon Logo' />
      </Link>
      <button onClick={toggleNav}>☰</button>
      <ul ref={navRef}>
        <li>
          <Link to='/' onClick={toggleNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={toggleNav}>
            About
          </Link>
        </li>
        <li>
          <a href='#menu' onClick={toggleNav}>
            Menu
          </a>
        </li>
        <li>
          <Link to='/booking' onClick={toggleNav}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to='/order' onClick={toggleNav}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to='/login' onClick={toggleNav}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
