import 'bootstrap/dist/css/bootstrap.min.css';
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";

const App = () => {
  return <center>
    <ClockHeading />
    <ClockSlogan />
    <CurrentTime />
  </center>
}

export default App;