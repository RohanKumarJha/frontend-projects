import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  let foodItems = [];
  // let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return <>
    <h1>Healthy food</h1>
    {foodItems.length === 0 && <h3>I'm still hungry</h3>};
    <ul className="list-group">
      {foodItems.map(item => (
        <li key={item} className="list-group-item">{item}</li>
      ))};
    </ul>
  </>
}

export default App;