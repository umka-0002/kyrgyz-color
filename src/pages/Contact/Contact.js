import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки сообщения
    console.log("Message sent:", formData);
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.content}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Свяжитесь с нами</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>Отправить</button>
          </form>
        </div>
        <div className={styles.mapSection}>
          <h2 className={styles.sectionTitle}>Наш Адрес</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.679230079364!2d144.96305791567488!3d-37.8136277797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed41!2zTWVsYm91cm5lIFZJQyAzMDAwLCDQodCo0JA!5e0!3m2!1sru!2sau!4v1596781234567!5m2!1sru!2sau"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className={styles.map}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
