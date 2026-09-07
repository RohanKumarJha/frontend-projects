import styles from './Item.module.css';

const Item = ({ item }) => {
  return <>
    <li className={`${styles["my-item"]}`}>
      <span className={`${styles["my-span"]}`}>{item}</span>
    </li>
  </>
}

export default Item;