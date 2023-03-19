import React from 'react';
import RestaurantImage from '../assets/Restaurant.jpg';
import ChefsImage from '../assets/Mario_and_Adrian_A.jpg';
import './About.css';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='content'>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            dolor pariatur soluta repellat nobis aperiam vel, numquam fuga
            veritatis quae, natus laboriosam ut quidem! Eveniet esse quos
            similique, accusamus nisi autem nesciunt quas, et, obcaecati aliquid
            exercitationem! Aliquam vero rem vitae hic laudantium dolor impedit
            consequuntur
          </p>
        </div>
        <div className='image-container'>
          <img
            src={ChefsImage}
            alt='Little Lemon Restaurant Chefs'
            className='image-left'
          />
          <img
            src={RestaurantImage}
            alt='Little Lemon Restaurant'
            className='image-right'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
