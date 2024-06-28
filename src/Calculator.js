import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleNumberClick = (num) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPrevValue(parseFloat(display));
    setDisplay("0");
  };

  const handleEquals = () => {
    const current = parseFloat(display);
    let result;
    switch (operator) {
      case "+":
        result = prevValue + current;
        break;
      case "-":
        result = prevValue - current;
        break;
      case "*":
        result = prevValue * current;
        break;
      case "/":
        result = prevValue / current;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setOperator(null);
    setPrevValue(null);
  };

  const handleClear = () => {
    setDisplay("0");
    setOperator(null);
    setPrevValue(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (item) => (
            <button
              key={item}
              onClick={() => {
                if (typeof item === "number")
                  handleNumberClick(item.toString());
                else if (item === "C") handleClear();
                else if (item === "=") handleEquals();
                else handleOperatorClick(item);
              }}
              className={`button ${
                typeof item === "number" ? "number" : "operator"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
