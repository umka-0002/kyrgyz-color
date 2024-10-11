import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import css from "../styles/Header.module.css";
import logo from "../../assets/images/logo.svg";
import MenuButton from './MenuButton';
import Menu from "./Menu";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg"; // Добавьте SVG иконку поиска
import SearchModal from './SearchModal';
import SearchBar from './../../features/search/SearchBar';
import CartModal from "./CartModal/CartModal";
import { fetchCart } from '../../features/cart/cartSlice';
import { ReactComponent as CartIcon } from "../../assets/icons/cart-icon.svg"; // Добавьте SVG иконку корзины
import AuthButton from './../../features/auth/AuthButton';
import UserMenu from "../../features/auth/UserMenu";



function Header() {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const dispatch = useDispatch();
  const userId = 'some-user-id'; // Получите userId из вашего состояния или контекста

  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className={css.header}>
      <MenuButton />
      <Menu />
      <div className={css.logo}>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={css.modals}>
        
      <SearchIcon className={css.searchIcon} onClick={handleOpenSearchModal} />
      <SearchModal isOpen={isSearchModalOpen} onClose={handleCloseSearchModal}>
        <SearchBar onClose={handleCloseSearchModal} />
      </SearchModal>

      <CartIcon className={css.cartIcon} onClick={handleOpenCartModal}/>
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseCartModal}>
       
      </CartModal>

      <AuthButton/>
      <UserMenu/>
      </div>
    </div>
  );
}

export default Header;
