import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.svg"; // Замените путь на правильный

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} ОсОО Кыргыз Кыргыз түсү. Бардык укуктар корголгон.
        </div>
        <div className={styles.newsletter}>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Ваш email"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Отправить</button>
          </form>
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com" className={styles.socialLink}><FaFacebook /></a>
          <a href="https://www.twitter.com" className={styles.socialLink}><FaTwitter /></a>
          <a href="https://www.instagram.com" className={styles.socialLink}><FaInstagram /></a>
          <a href="https://www.linkedin.com" className={styles.socialLink}><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
