import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [screenSize, setscreenSize] = useState(window.screen.width);

  const actualSize = () => {
    setscreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualSize);

    return () => {
      window.removeEventListener("resize", actualSize);
    };
  });

  return (
    <div>
      <p>Actual Screen Size: </p>
      <h1>{screenSize}</h1>
    </div>
  );
};

export default UseEffect2;
