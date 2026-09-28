import ToDoItem from "./ToDoItem";

const ToDoItems = ({ toDoItems }) => {
  return (
    <div className="items-container">
      {toDoItems.map(item =>
        <ToDoItem key={item.name} toDoName={item.name} toDoDate={item.dueDate} />
      )};
    </div>
  );
}

export default ToDoItems;