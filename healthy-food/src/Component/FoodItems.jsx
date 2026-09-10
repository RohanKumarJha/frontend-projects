import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {

  const [boughtItems, setBoughtItems] = useState([]);

  const handleBuyButton = (item) => {
    console.log(`${item} added to foodlist`);
    let updatedBoughtItems = [...boughtItems, item];
    setBoughtItems(updatedBoughtItems);
  };

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          item={item}
          handleBuyButton={() => handleBuyButton(item)}
          isBought={boughtItems.includes(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
