import React from 'react';
import '../Components/Main/Main.scss';

import background from '../Assets/background/background.jpeg';

const Main = () => {
  return (
    <div className='test-main'>
      <div className='intro'>
        <div className='intro-picture-wrapper'>
          <img src={background} alt='assorted products' className='intro-mobile' />
          <img src={background} alt='assorted products' className='intro-desktop' />
          <div className='description intro-desktop'>
            <h1> Mercedes Studio </h1>
            <h2>Glutenfritt & veganskt mathantverk</h2>
            <p>
              Livstil eller nödvändighet, det spelar ingen roll. Vi skapar bland annat godbitar av
              choklad som är fria från mjölk, gluten och ägg. Med mindre mängd socker och massor med
              ekologiska ingredienser så är de här läckerheterna lämpliga för veganer och många
              till.
            </p>

            <p className='closedWebShop'>Webbshoppen är tillfälligt stängd.</p>
            <p>
              Ni hittar våra produkter hos{' '}
              <a href='https://www.saltshop.ax/' target='blank' rel='noopener'>
                SALT Konsthantverk
              </a>{' '}
              i Sjökvarteret på Åland.
            </p>
          </div>
        </div>
        <div className='description intro-mobile'>
          <h1> Mercedes Studio </h1>
          <h2>Glutenfritt & veganskt mathantverk</h2>
          <p>
            Livstil eller nödvändighet, det spelar ingen roll. Vi skapar bland annat godbitar av
            choklad som är fria från mjölk, gluten och ägg. Med mindre mängd socker och massor med
            ekologiska ingredienser så är de här läckerheterna lämpliga för veganer och många till.
          </p>
          <p className='closedWebShop'>Webbshoppen är tillfälligt stängd.</p>
          <p>
            Ni hittar våra produkter hos{' '}
            <a href='https://www.saltshop.ax/' target='blank' rel='noopener'>
              SALT Konsthantverk
            </a>{' '}
            i Sjökvarteret på Åland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
