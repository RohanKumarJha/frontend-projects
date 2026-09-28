import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <center className="todo-container">

      <h1>TODO App</h1>

      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="items-container">
        <div className="container">
          <div className="row kg-row">
            <div className="col-6">"Buy Milk"</div>
            <div className="col-4">"4/10/2023"</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row kg-row">
            <div className="col-6">"Go to College"</div>
            <div className="col-4">"4/10/2023"</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;