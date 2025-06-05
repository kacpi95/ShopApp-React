import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(0);

  const getPrice = () => {
    const actualPrice = basePrice + currentPrice;
    return actualPrice;
  };
  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          title={title}
          getPrice={getPrice}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          setCurrentColor={setCurrentColor}
          colors={colors}
          sizes={sizes}
        >
        </ProductForm>
      </div>
    </article>
  );
};

export default Product;
