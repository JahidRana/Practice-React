import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `Chats(${count})`;
  });
  console.log("Use effect run outside");
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setcount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffect1;
