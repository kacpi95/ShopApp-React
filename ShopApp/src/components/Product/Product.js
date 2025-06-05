import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(0);

  const changeClassColor = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  const getPrice = () => {
    const actualPrice = basePrice + currentPrice;
    return actualPrice;
  };
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={`Koszulka-${name} coloru ${currentColor}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((el) => (
                <li key={el.name}>
                  <button
                    type='button'
                    className={el.name === currentSize ? styles.active : ''}
                    onClick={() => {
                      setCurrentSize(el.name);
                      setCurrentPrice(el.additionalPrice);
                    }}
                  >
                    {el.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((el) => (
                <li key={el}>
                  <button
                    type='button'
                    className={clsx(
                      changeClassColor(el),
                      el === currentColor && styles.active
                    )}
                    onClick={() => setCurrentColor(el)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
