import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { ResultTable } from "./Components/ResultTable";
import UserInput from "./Components/UserInput";
import { Header } from "./Components/Header/Header";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  /**
   * A generic function to handel input value change based on different inputIdentifier.
   * @param inputIdentifier - The first input number.
   * @param newValue - The second input number.
   * @returns an object of userInput.
   */
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // FORCE CONVERT string to number: add "+" to PARSE string to NUMBER
      };
    });
  }

  const isDurationValid = userInput.duration >= 1;
  return (
    <>
      <body className={"App"}>
        <Header />
        <UserInput userInput={userInput} onChange={handleChange} />
        {!isDurationValid && (
          <p className="center">
            <strong>Opps!</strong> The duration should not be less than -1;
          </p>
        )}
        {isDurationValid ? (
          <ResultTable userInput={userInput}></ResultTable>
        ) : (
          ""
        )}
      </body>
    </>
  );
}

export default App;
