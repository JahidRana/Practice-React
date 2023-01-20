import React, { useState } from "react";

function Counter() {
  const [value, setvalue] = useState(0);
  const increment = () => {
    setvalue(value + 1);
  };
  const deccrement = () => {
    setvalue(value - 1);
  };
  return (
    <div>
      <h1>Value: {value}</h1>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={deccrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
