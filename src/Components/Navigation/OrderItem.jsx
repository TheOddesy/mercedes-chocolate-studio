import React from 'react';

import {FaTrashAlt} from 'react-icons/fa';

const OrderItem = ({renderOrder, order}) => {
  //get item, remove the item from localstorage, set it back
  // set order-list-item innerHTML to ""
  // render order
  function removeThisItem() {
    const orderToUpdate = JSON.parse(localStorage.getItem('Order'));

    let index;
    for (let i = 0; 0 <= orderToUpdate.length; i++) {
      if (orderToUpdate[i].name === order.name) {
        index = i;
        break;
      }
    }
    orderToUpdate.splice(index, 1);
    localStorage.setItem('Order', JSON.stringify(orderToUpdate));

    renderOrder();
  }

  return (
    <div className='order-list-item' id='order-list-item'>
      <div className='order-item-first-line'>
        <button onClick={removeThisItem} className='order-trash-button'>
          <FaTrashAlt className='order-trash' />
        </button>

        <div className='order-name'>{order.name}</div>
      </div>
      <div className='order-price'>
        <div className='order-price-left'>
          {order.priceValue} € x {order.quantity} ={' '}
        </div>
        <div className='order-price-right'>{order.priceValue * order.quantity} €</div>
      </div>
      <div className='order-line'></div>
    </div>
  );
};

export default OrderItem;
