import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map(item =>
          <li key={item} className="list-group-item">{item}</li>
        )}
      </ul>
    </>
  );
}

export default App;