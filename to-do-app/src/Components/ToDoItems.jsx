import ToDoItem from "./ToDoItem";
import styles from './ToDoItems.module.css';

const ToDoItems = ({ toDoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {toDoItems.map(item =>
        <ToDoItem key={item.name} toDoName={item.name} toDoDate={item.dueDate} />
      )};
    </div>
  );
}

export default ToDoItems;