import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

const App = () => {

  // let foodItems = [];
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];

  return (
    <>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  );
}

export default App;