import "./styles.css";
import { useState } from "react";
import Functional from "./Component/Functional";
import ClassCompo from "./Component/ClassCompo";

export default function App() {
  const [button, setButton] = useState(true);

  const handlesubmit = () => {
    setButton(!button);
    // console.log("hello");
  };

  return (
    <div className="App">
      <button onClick={handlesubmit}>Function Compo</button>
      {button && <Functional />}
      <ClassCompo />
    </div>
  );
}
