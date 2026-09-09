import styles from './Item.module.css';

const Item = ({ item }) => {
  return <>
    <li className={`list-group-item ${styles["my-item"]} `}>
      <span className={styles["my-span"]}>{item}</span>
    <button className={`${styles.button} btn btn-info`}>Buy</button>
    </li>
  </>
}

export default Item;