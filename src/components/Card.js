import React from 'react';
import './Card.css';

const Card = ({ image, title, price, description }) => {
  return (
    <div className='card'>
      <img className='card-image' src={image} alt='greek salad' />
      <div className='dish-info'>
        <div className='title'>
          <h3>{title}</h3>
          <p className='price'>${price}</p>
        </div>
        <p className='description'>{description}</p>
        <button className='order-btn'>
          Order now
        </button>
      </div>
    </div>
  );
};

export default Card;
