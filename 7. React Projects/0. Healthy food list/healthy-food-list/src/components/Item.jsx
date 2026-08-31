import styles from './Item.module.css';

const Item = ({ item }) => {

  return (
    <li className={`${styles.MyItem} list-group-item`}>
      <span className={`${styles.MySpan}`}>{item}</span>
      <button className={`${styles.button} btn btn-info`}>
        Buy
      </button>
    </li>
  );
}

export default Item;