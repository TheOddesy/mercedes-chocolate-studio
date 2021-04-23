import React from 'react';
import './Order.scss';

import {TiPencil} from 'react-icons/ti';

const Order = () => {
  // ------------------------------------------------------------------
  /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
  function dropDownOrder() {
    document.getElementById('myOrder').classList.toggle('show-order');
    toggleOrderMenu();
  }

  // Close the dropdown menu if the user clicks outside of it
  //   window.onclick = function (event) {
  //     console.log('beeep');
  //     if (!event.target.matches('.order-button')) {
  //       const orderMenu = document.getElementsByClassName('order-content')[0];

  //       if (orderMenu.classList.contains('show-order')) {
  //         orderMenu.classList.remove('show-order');
  //       }
  //     }
  //   };

  function toggleOrderMenu() {
    const element = document.getElementById('myOrder');
    if (element.classList.contains('show-order')) {
      document.getElementsByClassName('order-button')[0].classList.add('order-menu-open');
    } else {
      document.getElementsByClassName('order-button')[0].classList.remove('order-menu-open');
    }
  }

  // ------------------------------------------------------------------
  // ------------------------------------------------------------------

  return (
    <div>
      <div className='order-container'>
        <div className='order-button-container'>
          <button type='button' onClick={dropDownOrder} className='order-button'>
            <TiPencil className='order-icon' />
          </button>
          <div id='myOrder' className='order-content'>
            <p>chocolatico x 1 = 10€</p>
            <p>chocolatico x 1 = 10€</p>
            <p>chocolatico x 1 = 10€</p>
            <p>chocolatico x 1 = 10€</p>
            <p>chocolatico x 1 = 10€</p>
            <p>chocolatico x 1 = 10€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
