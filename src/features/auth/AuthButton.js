import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice';
import { Link } from 'react-router-dom';
import styles from '../../shared/styles/features/AuthButton.module.css';

const AuthButton = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return isAuthenticated ? (
    <button className={styles.button} onClick={handleLogout}>Logout</button>
  ) : (
    <Link to="/login" className={styles.link}>Login</Link>
  );
};

export default AuthButton;
