import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <ul>
            <li>Address: stree 5 abc</li>
            <li>Email: order@littlelemon.com</li>
            <li>Phone: 334 341 1999</li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Opening times</h3>
          <ul>
            <li>Monday - Friday: 18:00 - 00:00</li>
            <li>Saturday - Sunday: 18:00 - 00:00</li>
          </ul>
        </div>
      </div>
      <div className='footer-followus'>
        <div className='footer-section'>
          <h3>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <hr className='divider' />
      <p className='copy'>&copy; Little Lemon 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
