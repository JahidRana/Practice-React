import React, { useState } from "react";

function UseState() {
  const bioData = [
    { id: 1, myName: "Jahid Rana", age: 23 },
    { id: 2, myName: "Sayem Hossain", age: 22 },
    { id: 3, myName: "Raihan Hossain", age: 24 },
  ];

  const [myArray, setmyArray] = useState(bioData);

  const clearArr = () => {
    setmyArray([]);
  };
  const remove = (id) => {
    const myNewArray = myArray.filter((currElem) => {
      return currElem.id !== id;
    });
    setmyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((currEle) => {
        return (
          <h1 key={currEle.id}>
            Name:{currEle.myName} & Age: {currEle.age}
            <button className="innerbtn" onClick={() => remove(currEle.id)}>
              Remove
            </button>
          </h1>
        );
      })}
      <button className="btn" onClick={clearArr}>
        Clear
      </button>
    </>
  );
}

export default UseState;
