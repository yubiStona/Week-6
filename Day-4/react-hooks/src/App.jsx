import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReducerComp from "./hooks/UseReducer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReducerComp />
    </>
  );
}

export default App;
