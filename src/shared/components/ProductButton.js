import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductButton.module.css';
import productsIcon from '../../assets/images/ProductButton.svg'; // Импортируем изображение


const ProductButton = () => {
  return (
    <Link to="/product" className={styles.button}>
      <img src={productsIcon} alt="Products" className={styles.icon} />
    </Link>
  );
};

export default ProductButton;
