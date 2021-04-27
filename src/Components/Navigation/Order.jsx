import React from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import './OrderMenu.scss';
import {NavLink} from 'react-router-dom';

import {TiPencil} from 'react-icons/ti';

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrder = this.renderOrder.bind(this);
    // this.copyOrder = this.copyOrder.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      // textToCopy: '',
      // totalSumValue: 0,
      showMenu: false,
    };
  }

  // ------------------------------------------------------------------

  renderOrder() {
    const orders = JSON.parse(localStorage.getItem('Order'));
    // console.log('orders', orders);
    // let totalSum = 0;
    // let totalText = '';

    // for (let i = 0; i < orders.length; i++) {
    //   totalSum += orders[i].priceValue * orders[i].quantity;
    //   totalText = totalText.concat(updateText(orders[i]));
    // }

    // const totalSumString = 'Summa: ' + totalSum + ' €';
    // totalText = totalText.concat(totalSumString);
    this.props.updateOrders(orders);
    // this.setState({totalSumValue: totalSum, textToCopy: totalText});
    //console.log(document.getElementById('myOrder'));
  }

  // ------------------------------------------------------------------

  toggleMenu() {
    this.renderOrder();
    this.setState({showMenu: !this.state.showMenu});
  }

  // ------------------------------------------------------------------

  render() {
    const sum = this.props.orders.reduce((acc, o) => acc + o.priceValue * o.quantity, 0);
    const copyText = this.props.orders.map(updateText).join('') + 'Summa: ' + sum + ' €';

    return (
      <div>
        <div className='order-container'>
          <div className='order-button-container'>
            <button type='button' onClick={this.toggleMenu} className='order-button'>
              <TiPencil
                className={this.state.showMenu ? 'order-icon-open order-icon' : 'order-icon'}
              />
            </button>
            {this.state.showMenu ? (
              <div id='myOrder' className='order-content show-order'>
                <div className='order-list' id='order-list'>
                  {this.props.orders.map((order, i) => (
                    <OrderItem key={i} renderOrder={this.renderOrder} order={order} />
                  ))}
                </div>

                <div className='order-sum' id='order-sum'>
                  Summa: {sum} €
                </div>
                <div className='order-line'></div>
                <div className='order-copy' id='order-copy'>
                  <button onClick={() => copyOrder(copyText)}>
                    Tryck här för att kopiera <br></br> dina anteckningar.
                  </button>
                  <p>
                    Skicka den kopiera texten via{' '}
                    <a href='mailto:mercedesstudioaland@gmail.com' target='blank' rel='noopener'>
                      mail
                    </a>{' '}
                    eller{' '}
                    <a href='https://m.me/mu.winquist' target='blank' rel='noopener'>
                      messenger
                    </a>{' '}
                    så tar vi hand om din beställning.
                  </p>
                  <div className='order-line'></div>
                  <p>
                    Om det är tomt i dina anteckningar så kan du gå till{' '}
                    <NavLink exact activeClassName='active' to='/Products'>
                      produkter
                    </NavLink>
                    {'.'}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

function updateText(order) {
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

function copyOrder(textToCopy) {
  navigator.clipboard.writeText(textToCopy);
  //console.log(textToCopy);
}
