import AppName from "./Component/AppName.jsx";
import AppToDo from "./Component/AddToDo.jsx";
import AddToDoItem1 from "./Component/ToDoItem1.jsx";
import AddToDoItem2 from "./Component/ToDoItem2.jsx";
import "./App.css";

const App = () => {
  return <center className="todo-container">
    <AppName />
    <div className="container">
      <AppToDo />
      <div className="item-container">
        <AddToDoItem1 />
        <AddToDoItem2 />
      </div>
    </div>
  </center>
}

export default App;