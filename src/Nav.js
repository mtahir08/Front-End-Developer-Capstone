import React from 'react';
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <h1>My Resume</h1>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
