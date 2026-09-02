import styles from './Item.module.css';

const Item = ({ item, bought, handleBuyButton }) => {

  return (
    <li className={`${styles.MyItem} list-group-item ${bought && "active"}`}>
      <span className={`${styles.MySpan}`}>{item}</span>
      <button className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
}

export default Item;