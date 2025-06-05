import styles from './OptionColor.module.scss';
import { clsx } from 'clsx';

export default function OptionColor({ colors, currentColor, setCurrentColor }) {
  const changeClassColor = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  return (
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
  );
}
