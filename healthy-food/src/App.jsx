import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './Component/FoodItems';
import ErrorMessage from './Component/ErrorMessage';
import './App.css';

const App = () => {

  let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return <>
    <h1 className='food-heading'>Healthy food</h1>
    <FoodItems foodItems={foodItems} />
    <ErrorMessage foodItems={foodItems} />
  </>
}

export default App;