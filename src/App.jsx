import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {

  let [calVal,setCalVal]=useState("");

  const onButtonCLick=(buttonValue)=>{
    if (buttonValue==='C'){
      setCalVal("")
    }else if (buttonValue==='='){
      let result=eval(calVal);
      setCalVal(result);
    }else{
      let newValue=calVal + buttonValue;
      setCalVal(newValue);
    }
  }

  return (
    <>
      <div className={styles.calculator}>

        <Display displayVal={calVal}></Display>
        <ButtonsContainer onButtonCLick={onButtonCLick}></ButtonsContainer>
        
      </div>
    </>
  );
}

export default App;
