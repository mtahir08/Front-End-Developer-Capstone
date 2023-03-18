import React from 'react';
import Card from './Card';
import { specialsData } from '../utils/Constants';
import './Main.css';

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className='specials'>
        <div className='top'>
          <h1>This week's specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className='cards'>{specialsCards}</div>
      </section>
    </main>
  );
}

export default Main;
