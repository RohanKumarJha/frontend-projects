import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AppHeader from './Components/AppName';
import AddToDo from './Components/AddToDo';
import ToDoItem from './Components/ToDoItem';
import ToDoItems from './Components/ToDoItems';

function App() {

  const toDoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023"
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023"
    }
  ];

  return (
    <center className="todo-container">
      <AppHeader />
      <AddToDo />
      <ToDoItems toDoItems={toDoItems} />
    </center>
  );
}

export default App;