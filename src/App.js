import React, { useState } from "react";
import Keypad from "./component/Keypad";
import "./App.css";

const App = () => {
  let [input, setinput] = useState("");

  function handleClick(value) {
    setinput(input + value);
  }

  function calculate(value) {
    let otuputVal = eval(input);
    setinput(otuputVal);
  }
  function handleClear() {
    setinput("");
  }
  return (
    <>
      <div className="container">
        <h1>calculator</h1>
        <div className="caculator">
          <input type="text" value={input} className="output" readOnly />
          <Keypad
            handleClick={handleClick}
            handleClear={handleClear}
            calculate={calculate}
          ></Keypad>
        </div>
      </div>
    </>
  );
};
export default App;
