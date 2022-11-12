import React from 'react';
import '../Components/Navigation/Navigation.scss';

import {NavLink} from 'react-router-dom';
// import { HashLink as Links } from "react-router-hash-link";
import Logo from '../Assets/logo/logo.png';
import wave from '../Assets/waves/wave.svg';

const Navigation = (props) => {
  return (
    <div>
      <div className='navigation-container'>
        <NavLink exact activeClassName='active' to='/' className='logo'>
          <img src={Logo} alt='logo for mercedes baking studio' />
        </NavLink>
      </div>
      <div className='nav-wave'>
        <img src={wave} alt='chocolate wave' />
        <div className='brown-block'></div>
      </div>
    </div>
  );
};

export default Navigation;
