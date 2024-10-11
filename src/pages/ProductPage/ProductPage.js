import React from 'react';
import ProductSection from './ProductSection';
import styles from './ProductPage.module.css';
import productImage from '../../assets/images/slider-images/image1.svg'
import productImage1 from '../../assets/images/slider-images/image2.svg'
import productImage2 from '../../assets/images/slider-images/image10.svg'
import productImage3 from '../../assets/images/slider-images/image1.svg'
import productImage4 from '../../assets/images/slider-images/image2.svg'
import productImage5 from '../../assets/images/slider-images/image10.svg'


// Пример данных продуктов
const products = [
  { id: 1, title: "Продукт 1", image: productImage2, price: 99.99 },
  { id: 2, title: "Продукт 2", image: productImage, price: 89.99 },
  { id: 3, title: "Продукт 3", image: productImage1, price: 79.99 },
  { id: 4, title: "Продукт 4", image: productImage3, price: 69.99 },
  { id: 5, title: "Продукт 5", image: productImage4, price: 59.99 },
  { id: 6, title: "Продукт 6", image: productImage5, price: 49.99 }
];

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <ProductSection title="Бренды национальных одежд" products={products} />
      <ProductSection title="Блюда" products={products} />
      <ProductSection title="Музыкальные инструменты" products={products} />
      <ProductSection title="Сувениры" products={products} />
      <ProductSection title="Вещи из войлока" products={products} />
    </div>
  );
};

export default ProductPage;
