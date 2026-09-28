import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import AppHeader from './Components/AppHeader';
import AddToDo from './Components/AddToDo';
import ToDoItem from './Components/ToDoItem';

function App() {
  return (
    <center className="todo-container">
      <AppHeader />
      <AddToDo />
      <div className="items-container">
        <ToDoItem toDoName={"Buy Milk"} toDoDate={"4/10/2023"} />
        <ToDoItem toDoName={"Go to College"} toDoDate={"4/10/2023"} />
      </div>
    </center>
  );
}

export default App;