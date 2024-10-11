import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../entities/product/productSlice';
import ImageSwitcher from '../../shared/components/ImageSwitcher/ImageSwitcher';
import ProductInfo from '../../shared/components/ProductInfo/ProductInfo';
import RelatedProductsSlider from '../../shared/components/RelatedProductsSlider/RelatedProductsSlider';

const AboutProduct = ({ match }) => {
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);
  const productId = match.params.id;

  useEffect(() => {
    dispatch(fetchProducts(productId));
  }, [dispatch, productId]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {product && (
        <>
          <ImageSwitcher images={product.images} />
          <ProductInfo product={product} />
          <h2>With this product, people also buy</h2>
          <RelatedProductsSlider products={product.relatedProducts} />
        </>
      )}
    </div>
  );
};

export default AboutProduct;
