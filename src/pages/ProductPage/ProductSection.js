import React from 'react';
import ProductCard from '../../shared/components/ProductCard/ProductCard';
import styles from './ProductSection.module.css';

const ProductSection = ({ title, products }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
