import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {

  let [activeItems, setActiveItems] = useState([]);

  const handleBuyButtonClicked = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  }

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item}
          item={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => handleBuyButtonClicked(item, event)} />
      ))}
    </ul>
  );
};

export default FoodItems;