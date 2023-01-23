import React from "react";
import "./App.css";
import UseState from "./component/UseState";
import Counter from "./component/Counter";
import Loginform from "./component/Form/Loginform";
import UseEffect1 from "./component/useEffect/UseEffect1";
import UseEffect2 from "./component/useEffect/UseEffect2";
const App = () => {
  // const [myName, setName] = useState("Jahid Rana");

  // const changeName = () => {
  //   let val = myName;
  //   if (val === "Jahid Rana") {
  //     setName("Sayem Hossen");
  //   } else {
  //     setName("Jahid Rana");
  //   }
  // };

  return (
    <div>
      {/* <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>
        Click me plz
      </button> */}
      {/* <UseState /> */}
      {/* <Counter /> */}
      <UseEffect2 />
    </div>
  );
};

export default App;
