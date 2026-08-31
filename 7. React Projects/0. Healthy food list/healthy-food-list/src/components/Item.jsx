import styles from './Item.module.css';

const Item = ({ item }) => {

  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${item} is bought`);
  }

  return (
    <li className={`${styles.MyItem} list-group-item`}>
      <span className={`${styles.MySpan}`}>{item}</span>
      <button className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}>
        Buy
      </button>
    </li>
  );
}

export default Item;