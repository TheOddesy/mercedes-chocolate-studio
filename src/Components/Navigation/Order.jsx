import React from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import './OrderMenu.scss';

import {TiPencil} from 'react-icons/ti';

const orders2 = [
  {id: 1, name: 'here'},
  {id: 2, name: 'dont'},
];

const Order = () => {
  let textToCopy;
  //   let orders = [];
  let orders = JSON.parse(localStorage.getItem('Order'));

  // ORDER MENU BUTTON ---------------------------------------------------------
  /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
  function dropDownOrder() {
    document.getElementById('myOrder').classList.toggle('show-order');
    renderOrder();
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

  function renderOrder() {
    textToCopy = '';
    const totalSum = addOrder();
    addTotalSum(totalSum);
    console.log(document.getElementById('myOrder'));
  }

  function addOrder() {
    //orderListEl.innerHTML = '';
    orders = JSON.parse(localStorage.getItem('Order'));
    let totalSum = 0;
    for (let i = 0; i < orders.length; i++) {
      totalSum += addOrderItem(orders[i]);
    }
    return totalSum;
  }

  function addOrderItem(order) {
    const nameString = order.name;

    textToCopy = textToCopy.concat(nameString + '\n');

    const totalPrice = order.priceValue * order.quantity;

    const priceQuantityString = order.priceValue + ' € x ' + order.quantity + ' = ';
    textToCopy = textToCopy.concat(priceQuantityString);

    const itemSumString = totalPrice + ' €';
    textToCopy = textToCopy.concat(itemSumString + '\n');

    textToCopy = textToCopy.concat('------\n');

    return totalPrice;
  }

  function addTotalSum(sum, el) {
    const sumEl = document.getElementById('order-sum');
    const totalSumString = 'Summa: ' + sum + ' €';
    sumEl.innerHTML = totalSumString;
    textToCopy = textToCopy.concat(totalSumString);
  }

  function copyOrder() {
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
  }

  // ------------------------------------------------------------------

  return (
    <div>
      <div className='order-container'>
        <div className='order-button-container'>
          <button type='button' onClick={dropDownOrder} className='order-button'>
            <TiPencil className='order-icon' />
          </button>
          <div id='myOrder' className='order-content'>
            <div className='order-list' id='order-list'>
              {orders.map((order) => (
                <OrderItem className='order-list-item' order={order} />
              ))}
            </div>
            <div className='order-sum' id='order-sum'></div>
            <div className='order-line'></div>
            <div className='order-copy' id='order-copy'>
              <button onClick={copyOrder}>Tryck här för att kopiera dina anteckningar.</button>
              <p>
                Skicka den kopiera texten via mail eller messenger så tar vi hand om din
                beställning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
