import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './Component/FoodItems';
import ErrorMessage from './Component/ErrorMessage';

const App = () => {

  let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return <>
    <h1>Healthy food</h1>
    <FoodItems foodItems={foodItems} />
    <ErrorMessage foodItems={foodItems} />
  </>
}

export default App;