import styles from './Item.module.css';

const Item = ({ item }) => {

  return (
    <li className={`${styles.MyItem} list-group-item`}>
      <span className={`${styles.MySpan}`}>{item}</span>
    </li>
  );
}

export default Item;