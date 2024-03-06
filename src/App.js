import React from "react";
import "./index.scss";

function App() {
  const [count, setCount] = React.useState(0);

  const handleMinusButton = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  const handlePlusButton = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div>
        <h2>COUNTER:</h2>
        <h1>{count}</h1>
        <button onClick={handleMinusButton} className="minus">
          - Минус
        </button>
        <button onClick={handlePlusButton} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
