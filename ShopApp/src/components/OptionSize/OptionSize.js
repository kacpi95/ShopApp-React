import styles from './OptionSize.module.scss';

export default function OptionSize({
  sizes,
  currentSize,
  setCurrentPrice,
  setCurrentSize,
}) {
  return (
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
  );
}
