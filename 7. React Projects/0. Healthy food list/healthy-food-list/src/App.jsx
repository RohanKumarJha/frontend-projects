import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  let foodItems = [];
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null}
      <ul className="list-group">
        {foodItems.map(item =>
          <li key={item} className="list-group-item">{item}</li>
        )}
      </ul>
    </>
  );
}

export default App;