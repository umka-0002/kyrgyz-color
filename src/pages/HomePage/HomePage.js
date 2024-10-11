import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../entities/product/productSlice";
import ProductList from "../../widgets/ProductList/ProductList";
import styles from "./HomePage.module.css";
import Slider from "../../shared/components/Slider/Slider";
import ProductButton from "../../shared/components/ProductButton";
import InfiniteScrollSlider from "../../shared/components/Slider/InfiniteScrollSlider";
import productImage from "../../assets/images/slider-images/image2.svg";
import productImage1 from "../../assets/images/slider-images/image1.svg";
import productImage2 from "../../assets/images/slider-images/image10.svg";
import ProductSection from "../ProductPage/ProductSection";

const HomePage = () => {
  const dispatch = useDispatch();
  const productStatus = useSelector((state) => state.product.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const products = [
    { id: 1, title: "Продукт 1", image: productImage2, price: 99.99 },
    { id: 2, title: "Продукт 2", image: productImage, price: 89.99 },
    { id: 3, title: "Продукт 3", image: productImage1, price: 79.99 },
  ];

  return (
    <div className={styles.homePage}>
      {productStatus === "loading" ? (
        <p>Loading...</p>
      ) : productStatus === "succeeded" ? (
        <ProductList products={products} />
      ) : (
        <>
          <div className={styles.main}>
            <Slider />
            <ProductButton />
          </div>
          <InfiniteScrollSlider />
          <div className={styles.productCard}>
            <ProductSection
              products={products}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
