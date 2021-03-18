import React from 'react';
import './Product.scss';

const Product = ({product}) => {
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
        </div>
      </div>
    </div>
  );
};

export default Product;
