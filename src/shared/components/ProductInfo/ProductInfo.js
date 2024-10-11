import React from 'react';

const ProductInfo = ({ product }) => (
  <div>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button>Add to Cart</button>
    <button>Order Now</button>
  </div>
);

export default ProductInfo;
