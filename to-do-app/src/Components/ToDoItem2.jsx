const ToDoItem2 = () => {

  let toDoName = "Go to College";
  let toDoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;