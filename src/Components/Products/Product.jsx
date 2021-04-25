import React from 'react';
import './Product.scss';

const Product = ({product}) => {
  // Checks if there is an intance of this type of product
  // If there is not, add one an the quantity one
  // If the is, increase the qunatity by one
  function updateOrder() {
    const order = JSON.parse(localStorage.getItem('Order'));
    for (let i = 0; i <= order.length; i++) {
      let orderName;
      // Catches if order is empty
      try {
        orderName = order[i].name;
      } catch (TypeError) {}

      if (orderName === product.name) {
        order[i].quantity += 1;
        localStorage.setItem('Order', JSON.stringify(order));

        return;
      }
    }
    addNewProductinstance(order);
  }

  // Add a new instance of this product to the order witht the quantity 1
  function addNewProductinstance(order) {
    const productInfo = {
      name: product.name,
      priceValue: product.priceValue,
      quantity: 1,
    };
    order.push(productInfo);
    localStorage.setItem('Order', JSON.stringify(order));
  }

  return (
    <div>
      <div className='product-wrapper'>
        <div className='product-image-wrapper'>
          <img src={product.image} alt='assorted product' />

          <div className='product-information-wrapper'>
            <h3>{product.name}</h3>
            <div className='description'>{product.description}</div>
            <div className='price'>{product.price}</div>
            <div class='ingredients-wrapper'>
              <button type='button' class='hover-button'>
                Ingredienser
              </button>
              <div class='show-ingredients'>
                <p>{product.ingredients}</p>
              </div>
            </div>
          </div>
          <button onClick={updateOrder} id='add-button' className='add-button'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
