import styles from "./App.module.css"
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

const App = () => {
  return <div className={styles.calculator}>
    <Display />
    <ButtonsContainer />
  </div>
}

export default App;