import React from 'react';
import './Footer.scss';
// import { Link, useLocation } from 'react-router-dom';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';
import {ImPhone} from 'react-icons/im';

const Footer = () => {
  return (
    <div>
      <div className='footer '>
        <div className='footer-green-product-info'>
          <p>
            Alla våra läckra produkter är fria från mjölk, gluten och ägg - lämpliga för veganer.
          </p>
        </div>

        <div className='footer-information'>
          <p> Mercedes Studio</p>
          <p>Lugn och Ro AB</p>
          <p>
            <ImPhone className='contact-fonts-phone' /> +358 40 539 6699
          </p>
          <a href='mailto:mercedesstudioaland@gmail.com' target='blank' rel='noopener'>
            <IoMail className='contact-fonts-mail' />
            mercedesstudioaland@gmail.com
          </a>

          <p>
            {' '}
            <a href='https://www.facebook.com/veganchoklad/' target='blank' rel='noopener'>
              <FaFacebookF className='social-media-icons' />
            </a>{' '}
            |{' '}
            <a
              href='https://www.instagram.com/mercedesstudioaland/?hl=en'
              target='blank'
              rel='noopener'>
              <FaInstagram className='social-media-icons' />
            </a>{' '}
          </p>
        </div>

        <div className='created'>
          <a href='https://theoddesy.github.io/HomePage/' target='blank' rel='noopener'>
            Who made this page?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
