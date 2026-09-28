import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import AppHeader from './Components/AppHeader';
import AddToDo from './Components/AddToDo';
import ToDoItem1 from './Components/ToDoItem1';
import ToDoItem2 from './Components/ToDoItem2';

function App() {
  return (
    <center className="todo-container">
      <AppHeader />

      <AddToDo />

      <div className="items-container">
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;