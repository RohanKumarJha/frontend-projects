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

  return (
    <div className="todo-container">
      <AppName />

      <div className="container">
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </div>
  );
};