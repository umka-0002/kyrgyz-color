// src/components/MenuButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../features/menu/menuSlice';
import css from '../../shared/styles/MenuButton.module.css';

const MenuButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  return (
    <div className={css.menuDiv}>
    <button className={`${css.menuButton} ${isOpen ? css.open : ''}`} onClick={() => dispatch(toggleMenu())}>
      <span className={css.line}></span>
      <span className={css.line}></span>
      <span className={css.line}></span>
    </button>
    <p className={css.menuText}>Атактуу брендтер</p>
    </div>

  );
};

export default MenuButton;
