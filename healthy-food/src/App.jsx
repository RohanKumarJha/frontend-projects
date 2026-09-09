import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './Component/FoodItems';
import ErrorMessage from './Component/ErrorMessage';
import './App.css';
import Container from './Component/Container';
import FoodInput from './Component/FoodInput';

const App = () => {

  let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk", "Ghee"];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  return <Container>
    <h1 className='food-heading'>Healthy food</h1>
    <FoodInput handleOnChange={handleOnChange} />
    <FoodItems foodItems={foodItems} />
    <ErrorMessage foodItems={foodItems} />
  </Container>
}

export default App;