import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './Component/FoodItems';
import ErrorMessage from './Component/ErrorMessage';
import './App.css';
import Container from './Component/Container';
import FoodInput from './Component/FoodInput';
import { useState } from 'react';

const App = () => {

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }

  return <Container>
    <h1 className='food-heading'>Healthy food</h1>
    <FoodInput handleKeyDown={onKeyDown} />
    <FoodItems foodItems={foodItems} />
    <ErrorMessage foodItems={foodItems} />
  </Container>
}

export default App;