import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

const App = () => {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    }
  ];

  return <center className="todo-container">
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
}

export default App;