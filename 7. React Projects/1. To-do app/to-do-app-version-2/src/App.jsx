import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css'

const App = () => {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <div className="todo-container text-center">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </div>
  );
}

export default App;