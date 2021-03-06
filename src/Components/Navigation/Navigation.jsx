import React from 'react';
import './Navigation.scss';
import Order from './Order';

import {NavLink} from 'react-router-dom';
// import { HashLink as Links } from "react-router-hash-link";
import Logo from '../../Assets/logo/logo.png';
import wave from '../../Assets/waves/wave.svg';

const Navigation = (props) => {
  // ------------------------------------------------------------------
  /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
  function dropDownMenu() {
    document.getElementById('myDropdown').classList.toggle('show-menu');
    toggleMenuButton();
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.drop-button-part')) {
      const dropdownMenu = document.getElementsByClassName('dropdown-content')[0];

      if (dropdownMenu.classList.contains('show-menu')) {
        dropdownMenu.classList.remove('show-menu');
        toggleMenuButton();
      }
    }
  };

  function toggleMenuButton() {
    const element = document.getElementById('myDropdown');
    if (element.classList.contains('show-menu')) {
      document.getElementsByClassName('button-container')[0].classList.add('button-in-focus');
    } else {
      document.getElementsByClassName('button-container')[0].classList.remove('button-in-focus');
    }
  }
  // ------------------------------------------------------------------

  return (
    <div>
      <div className='navigation-container'>
        <NavLink exact activeClassName='active' to='/' className='logo'>
          <img src={Logo} alt='logo for mercedes baking studio' />
        </NavLink>
        <Order updateOrders={props.updateOrders} orders={props.orders} />
        <div className='nav-mobile'>
          <button type='button' onClick={dropDownMenu} className='drop-button drop-button-part'>
            <div className='button-container '>
              <div className='button-line line1'></div>
              <div className='button-line line2'></div>
              <div className='button-line line3'></div>
            </div>
          </button>
          <div id='myDropdown' className='dropdown-content'>
            <NavLink exact activeClassName='active' to='/'>
              HEM
            </NavLink>
            <NavLink exact activeClassName='active' to='/Products'>
              PRODUKTER
            </NavLink>
            <NavLink exact activeClassName='active' to='/About'>
              OM OSS
            </NavLink>
            <NavLink exact activeClassName='active' to='/Contact'>
              KONTAKT
            </NavLink>
          </div>
        </div>

        <div className='nav-desktop'>
          <NavLink exact activeClassName='active' to='/'>
            HEM
          </NavLink>
          <NavLink exact activeClassName='active' to='/Products'>
            PRODUKTER
          </NavLink>
          <NavLink exact activeClassName='active' to='/About'>
            OM OSS
          </NavLink>
          <NavLink exact activeClassName='active' to='/Contact'>
            KONTAKT
          </NavLink>
        </div>
      </div>
      <div className='nav-wave'>
        <img src={wave} alt='chocolate wave' />
        <div className='brown-block'></div>
      </div>
    </div>
  );
};

export default Navigation;
