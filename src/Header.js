import React from 'react';
import "./App.css";

function Header() {
  return (
    <aside>
      <img
        className='profile-img'
        src='https://via.placeholder.com/150'
        alt='Profile picture'
      />
      <h2 className='profile-name'>John Doe</h2>
    </aside>
  );
}

export default Header;
