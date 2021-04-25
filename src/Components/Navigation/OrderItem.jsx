import React from 'react';
import './Order.scss';
import './OrderMenu.scss';

const OrderItem = ({order}) => {
  return (
    <div>
      <div className='order-name'>{order.name}</div>
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
