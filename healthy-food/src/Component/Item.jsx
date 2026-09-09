import styles from './Item.module.css';

const Item = ({ item }) => {

  const handleBuyButtonClicked = (foodItem, event) => {
    console.log(event);
    console.log(`${foodItem} button clicked.`)
  }

  return <>
    <li className={`list-group-item ${styles["my-item"]} `}>
      <span className={styles["my-span"]}>{item}</span>
      <button className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(item, event)}>
        Buy
      </button>
    </li>
  </>
}

export default Item;