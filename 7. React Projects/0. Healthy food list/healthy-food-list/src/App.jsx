import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

const App = () => {

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    console.log(event);
  }

  return (
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown} />
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;