import Item from "./Item";

const FoodItems = ({ foodItems }) => {

  return <>
    <ul className="list-group">
      {foodItems.map(item => (
        <Item
          key={item}
          item={item}
          handleBuyButton={() => console.log(`${item} bought`)} />
      ))}
    </ul>
  </>
}

export default FoodItems;