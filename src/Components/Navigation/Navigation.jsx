import React from 'react';
import './Navigation.scss';
import {NavLink} from 'react-router-dom';
// import { HashLink as Links } from "react-router-hash-link";
import Logo from '../../Assets/logo/logo.png';

const Navigation = () => {
  /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
  function dropDownMenu() {
    document.getElementById('myDropdown').classList.toggle('show');
    toggleMenuButton();
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.drop-button-part')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          toggleMenuButton();
        }
      }
    }
  };

  function toggleMenuButton() {
    const element = document.getElementById('myDropdown');
    if (element.classList.contains('show')) {
      console.log(document.getElementsByClassName('button-container'));
      document.getElementsByClassName('button-container')[0].classList.add('button-in-focus');
    } else {
      console.log(document.getElementsByClassName('button-container'));
      document.getElementsByClassName('button-container')[0].classList.remove('button-in-focus');
    }
  }

  return (
    <div>
      <div className='navigation-container'>
        <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/' className='logo'>
          <img src={Logo} alt='logo for mercedes baking studio' />
        </NavLink>
        <div className='nav-mobile'>
          <button type='button' onClick={dropDownMenu} className='drop-button drop-button-part'>
            <div className='button-container '>
              <div className='button-line line1'></div>
              <div className='button-line line2'></div>
              <div className='button-line line3'></div>
            </div>
          </button>
          <div id='myDropdown' className='dropdown-content'>
            <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/'>
              HEM
            </NavLink>
            <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/Products'>
              PRODUKTER
            </NavLink>
            <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/About'>
              OM OSS
            </NavLink>
            <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/Contact'>
              KONTAKT
            </NavLink>
          </div>
        </div>

        <div className='nav-desktop'>
          <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/'>
            HEM
          </NavLink>
          <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/Products'>
            PRODUKTER
          </NavLink>
          <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/About'>
            OM OSS
          </NavLink>
          <NavLink exact activeClassName='active' to='/mercedes-chocolate-studio/Contact'>
            KONTAKT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
