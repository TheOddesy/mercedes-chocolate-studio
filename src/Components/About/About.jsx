import React from 'react';
import AboutMercedes from './AboutMercedes';
import AboutPeter from './AboutPeter';
import './About.scss';
import './AboutPerson.scss';
import mercedes from '../../Assets/profile/mercedes.jpg';
import peter from '../../Assets/profile/peter.jpg';
import garden from '../../Assets/profile/garden.jpeg';

const About = () => {
  return (
    <div>
      <div className='about-container'>
        <div className='about-person'>
          <div className='profile-picture profile-picture-mercedes'>
            <img src={mercedes} alt='profile of Mercedes' className='profile-mercedes' />
          </div>
          <div className='about-content'>
            <AboutMercedes />
          </div>
        </div>
        <div className='about-person about-mobile'>
          <div className='profile-picture about-mobile profile-picture-peter'>
            <img src={peter} alt='profile of Peter' className='about-mobile' />
          </div>
          <div className='about-content about-mobile'>
            <AboutPeter />
          </div>
        </div>

        <div className='about-person about-desktop'>
          <div className='about-content about-desktop'>
            <AboutPeter />
          </div>
          <div className='profile-picture about-desktop profile-picture-peter'>
            <img src={peter} alt='profile of Peter' className='about-desktop' />
          </div>
        </div>

        <div className='about-garden'>
          <h2>Den harmoniska trädgården Lugn & Ro</h2>
          <div className='profile-garden'>
            <img src={garden} alt='den harmoniska trädgården' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
