const CurrentTime = () => {

  let currentDate = new Date();

  return (
    <p className="lead">
      This is current time : {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;