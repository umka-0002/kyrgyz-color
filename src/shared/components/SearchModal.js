// src/shared/components/SearchModal/SearchModal.js
import React from 'react';
import styles from '../styles/SearchModal.module.css';

const SearchModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default SearchModal;
