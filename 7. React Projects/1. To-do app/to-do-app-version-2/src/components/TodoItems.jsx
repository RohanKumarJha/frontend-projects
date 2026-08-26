import TodoItem from './TodoItem'
import styles from './TodoItems.module.css';

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) =>
        <TodoItem
          key={index} // 👈 Add a unique key here
          todoName={item.name}
          todoDate={item.dueDate}
        />
      )}
    </div>
  );
}


export default TodoItems;
