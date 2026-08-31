import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

const App = () => {

  // let foodItems = [];
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];

  let textToShow = "Food item entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  }

  return (
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} />
      <FoodInput handleOnChange={handleOnChange} />
      <p>{textToShow}</p>
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;