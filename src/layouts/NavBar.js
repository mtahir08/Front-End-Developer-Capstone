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
          <a href='#about' onClick={toggleNav}>
            About
          </a>
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
          <a href='#order-online' onClick={toggleNav}>
            Order Online
          </a>
        </li>
        <li>
          <a href='#login' onClick={toggleNav}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
