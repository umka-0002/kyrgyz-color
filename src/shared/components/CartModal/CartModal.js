// src/shared/components/CartModal/CartModal.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../../features/cart/cartSlice';
import styles from '../../styles/CartModal.module.css';

const CartModal = ({ isOpen, onClose }) => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const userId = 'some-user-id'; // Получите userId из вашего состояния или контекста

  if (!isOpen) return null;

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart({ userId, productId }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Shopping Cart</h2>
        {items.length > 0 ? (
          <ul className={styles.cartList}>
            {items.map(item => (
              <li key={item.productId} className={styles.cartItem}>
                <span>{item.productId}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
