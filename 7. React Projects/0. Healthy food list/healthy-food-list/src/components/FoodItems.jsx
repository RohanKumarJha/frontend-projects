import Item from "./Item";

const FoodItems = ({ foodItems }) => {

  const handleBuyButtonClicked = (item) => {
    console.log(`${item} is bought`);
  }

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item}
          item={item}
          handleBuyButton={() => handleBuyButtonClicked(item)} />
      ))}
    </ul>
  );
};

export default FoodItems;