import React from 'react';
import {Link} from 'react-router-dom';
import './Main.scss';

import background from '../../Assets/background/background.jpeg';

const Main = () => {
  return (
    <div class='test-main'>
      <div className='intro'>
        <div className='intro-picture-wrapper'>
          <img src={background} alt='assorted products' className='intro-mobile' />
          <img src={background} alt='assorted products' className='intro-desktop' />
          <div className='description intro-desktop'>
            <h1> Mercedes Chokladstudio </h1>
            <h2>Veganskt chokladhantverk</h2>
            <p>
              Livstil eller nödvändighet, det spellar inget roll. Vi skapar godbitar av choklad som
              är fria från mjölk, gluten och ägg. Med mindre mängd socker och massor med ekologiska
              ingredienser så är de här läckerheterna lämpliga för veganer och många till.
            </p>
            <p>
              Ta en titt på våra{' '}
              <Link to='/mercedes-chocolate-studio/Products'>chokladprodukter</Link> och{' '}
              <Link to='/mercedes-chocolate-studio/Contact'>kontakta</Link> oss så hjälper vi till!
            </p>
          </div>
        </div>
        <div className='description intro-mobile'>
          <h1> Mercedes Chokladstudio </h1>
          <h2>Veganskt chokladhantverk</h2>
          <p>
            Livstil eller nödvändighet, det spellar inget roll. Vi skapar godbitar av choklad som är
            fria från mjölk, gluten och ägg. Med mindre mängd socker och massor med ekologiska
            ingredienser så är de här läckerheterna lämpliga för veganer och många till.
          </p>
          <p>
            Ta en titt på våra{' '}
            <Link to='/mercedes-chocolate-studio/Products'>chokladprodukter</Link> och{' '}
            <Link to='/mercedes-chocolate-studio/Contact'>kontakta</Link> oss så hjälper vi till!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
