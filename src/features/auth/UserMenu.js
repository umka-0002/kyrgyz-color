import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../shared/styles/features/UserMenu.module.css';
import UserIcon from '../../assets/icons/user-icon.svg'

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={styles.menuButton}>
        <img src={UserIcon} alt="User Icon" />
      </button>
      {open && (
        <div className={styles.menu}>
          <p className={styles.menuItem}>{user ? user.username : 'Guest'}</p>
          {/* Add additional user menu items here */}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
