import React from 'react';
import './Product.scss';

const Product = ({product}) => {
  // Checks if there is an intance of this type of product
  // If there is not, add one an the quantity one
  // If the is, increase the qunatity by one
  function updateChocolateOrder() {
    const chocolateOrder = JSON.parse(localStorage.getItem('ChocolateOrder'));
    for (let i = 0; i <= chocolateOrder.length; i++) {
      let orderName;
      // Catches if chocolateOrder is empty
      try {
        orderName = chocolateOrder[i].name;
      } catch (TypeError) {}

      if (orderName === product.name) {
        chocolateOrder[i].quantity += 1;
        localStorage.setItem('ChocolateOrder', JSON.stringify(chocolateOrder));
        return;
      }
    }
    addNewProductinstance(chocolateOrder);
  }

  // Add a new instance of this product to the chocolateOrder witht the quantity 1
  function addNewProductinstance(chocolateOrder) {
    const productInfo = {
      name: product.name,
      priceValue: product.priceValue,
      quantity: 1,
    };
    chocolateOrder.push(productInfo);
    localStorage.setItem('ChocolateOrder', JSON.stringify(chocolateOrder));
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
          <button onClick={updateChocolateOrder} className='add-button'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
