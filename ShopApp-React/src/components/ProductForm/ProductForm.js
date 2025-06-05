import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

export default function ProductForm({
  title,
  getPrice,
  currentColor,
  currentSize,
  sizes,
  colors,
  setCurrentColor,
  setCurrentSize,
  setCurrentPrice,
}) {
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };
  return (
    <form onSubmit={handleAddProduct}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentPrice={setCurrentPrice}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
}
