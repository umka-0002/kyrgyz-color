// src/components/Menu.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from '../../shared/styles/Menu.module.css';

const Menu = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);

  return (
    <nav className={`${css.menu} ${isOpen ? css.open : ''}`}>
      <ul className={css.ul}>
        <li className={css.li}><Link className={css.link} to="/">Башкы бет</Link></li>
        <li className={css.li}><Link className={css.link} to="/about">Биз жөнүндө</Link></li>
        <li className={css.li}><Link className={css.link} to="/contact">Байланыш</Link></li>
        <li className={css.li}><Link className={css.link} to="/all-products">Бардык товарлар</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
