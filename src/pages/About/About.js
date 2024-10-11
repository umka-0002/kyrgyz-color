import React from "react";
import styles from "./About.module.css";
import logo from "../../assets/images/logo.svg"; // Путь к логотипу вашего магазина

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Биз жөнүндө</h1>
      </div>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Биздин Миссия</h2>
          <p className={styles.text}>
            Биздин онлайн дүкөндө биз сизге уникалдуу өнүмдөрдү сунуштап, мыкты
            улуттук бренддерди бириктирүүгө аракет кылабыз. Биздин миссиябыз-бай
            маданий мурастарды жана каада-салттарды чагылдырган сапаттуу өнүмдөр
            менен камсыз кылуу менен жергиликтүү өндүрүүчүлөрдү колдоо жана
            жайылтуу.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Биздин Баалуулуктар</h2>
          <ul className={styles.valuesList}>
            <li className={styles.value}>
              <h3 className={styles.valueTitle}>Сапат</h3>
              <p className={styles.text}>
                Биз аты-жөнүнө жана кадыр-баркына кам көргөн ишенимдүү
                бренддердин жогорку сапаттагы өнүмдөрүн гана сунуштайбыз.
              </p>
            </li>
            <li className={styles.value}>
              <h3 className={styles.valueTitle}>Өзгөчөлүк</h3>
              <p className={styles.text}>
                Биздин ассортименттеги ар бир продукт уникалдуу жана анын
                өндүрүүчүсүнүн маданий өзгөчөлүктөрүн жана салттарын чагылдырат.
              </p>
            </li>
            <li className={styles.value}>
              <h3 className={styles.valueTitle}>
                Жергиликтүү өндүрүүчүлөрдү колдоо
              </h3>
              <p className={styles.text}>
                Биз жергиликтүү продюсерлер менен активдүү кызматташып, аларга
                жаңы деңгээлге чыгууга жана аудиторияны кеңейтүүгө жардам
                беребиз
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Биздин Тарыхыбыз</h2>
          <p className={styles.text}>
            Биздин дүкөн жергиликтүү бренддер үчүн өз товарларын кеңири
            аудиторияга сунуштай турган аянтча түзүү максатында түзүлгөн. Биз
            чакан ассортименттен баштадык, бирок сиздин колдооңуз жана улуттук
            продукцияларга болгон кызыгууңуздун аркасында каталогубузду
            кеңейтип, Сизге дагы уникалдуу өнүмдөрдү сунуштай алдык.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Биз менен байланыш </h2>
          <p className={styles.text}>
            Биз ар дайым кызматташууга жана жаңы идеяларга ачыкпыз. Суроолоруңуз
            же сунуштарыңыз болсо, электрондук почта же социалдык медиа
            баракчаларыбыз аркылуу биз менен байланышыңыз.
          </p>
          <div className={styles.contactInfo}>
            <a href="mailto:info@yourshop.com" className={styles.contactLink}>
              info@yourshop.com
            </a>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com" className={styles.socialLink}>
                Facebook
              </a>
              <a href="https://www.twitter.com" className={styles.socialLink}>
                Twitter
              </a>
              <a href="https://www.instagram.com" className={styles.socialLink}>
                Instagram
              </a>
              <a href="https://www.linkedin.com" className={styles.socialLink}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
