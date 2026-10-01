import { useState } from "react";
import styles from "./App.module.css"
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

const App = () => {

  const [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return <div className={styles.calculator}>
    <Display displayValue={calVal} />
    <ButtonsContainer
      onButtonClick={onButtonClicked} />
  </div>
}

export default App;