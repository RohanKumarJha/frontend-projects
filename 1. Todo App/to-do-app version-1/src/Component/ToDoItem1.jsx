const ToDoItem1 = () => {

  let todoName = "BuyMilk";
  let todoDate = "04/10/2025";

  return (
    <div className="row my-row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger my-button">Danger</button>
      </div>
    </div>
  );
}

export default ToDoItem1;