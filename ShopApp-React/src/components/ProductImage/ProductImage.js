import styles from './ProductImage.module.scss';

export default function ProductImage({ name, currentColor }) {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={`Koszulka-${name} coloru ${currentColor}`}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
}
