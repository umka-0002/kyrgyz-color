import React from "react";
import styles from "../../styles/ProductCard/ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  if (!product) {
    return null; // Возвращаем null, если продукт не передан
  }

  const handleAddToCart = () => {
    const userId = 1; // Пример идентификатора пользователя
    const productId = product.id;
    const quantity = 1;

    dispatch(addItemToCart({ userId, productId, quantity }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.borderTopLeft}></div>
      <div className={styles.borderTopRight}></div>
      <div className={styles.borderBottomLeft}></div>
      <div className={styles.borderBottomRight}></div>

      <div className={styles.content}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.titleImage}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.price}>${product.price}</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonLeft} onClick={handleAddToCart}>
            Кутучага
          </button>
          <Link to="/products">
            <button className={styles.buttonRight}>Сатып алуу</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
