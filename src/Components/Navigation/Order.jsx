import React from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import './OrderMenu.scss';

import {TiPencil} from 'react-icons/ti';

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrder = this.renderOrder.bind(this);
    this.dropDownOrder = this.dropDownOrder.bind(this);
    this.copyOrder = this.copyOrder.bind(this);
    this.state = {
      textToCopy: '',
      totalSumValue: 0,
      orders: JSON.parse(localStorage.getItem('Order')),
    };
  }

  // ORDER MENU BUTTON ---------------------------------------------------------
  /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
  dropDownOrder() {
    this.renderOrder();
    document.getElementById('myOrder').classList.toggle('show-order');
    this.toggleOrderMenu();
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

  toggleOrderMenu() {
    const element = document.getElementById('myOrder');
    if (element.classList.contains('show-order')) {
      document.getElementsByClassName('order-button')[0].classList.add('order-menu-open');
    } else {
      document.getElementsByClassName('order-button')[0].classList.remove('order-menu-open');
    }
  }

  // ------------------------------------------------------------------

  renderOrder() {
    this.setState({orders: JSON.parse(localStorage.getItem('Order'))});
    this.updateStates();
    //console.log(document.getElementById('myOrder'));
  }

  updateStates() {
    this.setState({textToCopy: ''});
    let totalSum = 0;
    let totalText = '';
    for (let i = 0; i < this.state.orders.length; i++) {
      totalSum += this.updateSum(this.state.orders[i]);
      totalText = totalText.concat(this.updateText(this.state.orders[i]));
    }
    const totalSumString = 'Summa: ' + totalSum + ' €';
    totalText = totalText.concat(totalSumString);
    this.setState({totalSumValue: totalSum});
    this.setState({textToCopy: totalText});
  }

  updateSum(order) {
    return order.priceValue * order.quantity;
  }

  updateText(order) {
    let text = '';
    const nameString = order.name + '\n';
    text = text.concat(nameString);

    const priceQuantityString = order.priceValue + ' € x ' + order.quantity + ' = ';
    text = text.concat(priceQuantityString);

    const totalPrice = order.priceValue * order.quantity;
    const itemSumString = totalPrice + ' €\n';
    text = text.concat(itemSumString);

    const line = '--------\n';
    text = text.concat(line);

    return text;
  }

  copyOrder() {
    console.log(this.state.textToCopy);
    navigator.clipboard.writeText(this.state.textToCopy);
  }

  // ------------------------------------------------------------------

  render() {
    return (
      <div>
        <div className='order-container'>
          <div className='order-button-container'>
            <button type='button' onClick={this.dropDownOrder} className='order-button'>
              <TiPencil className='order-icon' />
            </button>
            <div id='myOrder' className='order-content'>
              <div className='order-list' id='order-list'>
                {this.state.orders.map((order) => (
                  <OrderItem renderOrder={this.renderOrder} order={order} />
                ))}
              </div>
              <div className='order-sum' id='order-sum'>
                Summa: {this.state.totalSumValue} €
              </div>
              <div className='order-line'></div>
              <div className='order-copy' id='order-copy'>
                <button onClick={this.copyOrder}>
                  Tryck här för att kopiera dina anteckningar.
                </button>
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
  }
}
