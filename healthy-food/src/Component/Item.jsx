import styles from './Item.module.css';

const Item = ({ item, handleBuyButton, isBought }) => {

  return (
    <li className={`list-group-item ${styles["my-item"]} ${isBought ? styles["bought-item"] : ""
      }`}>
      <span className={styles["my-span"]}>{item}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
