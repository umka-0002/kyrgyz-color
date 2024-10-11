import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const RelatedProductsSlider = ({ products }) => (
  <div style={{ display: 'flex', overflowX: 'scroll' }}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default RelatedProductsSlider;
