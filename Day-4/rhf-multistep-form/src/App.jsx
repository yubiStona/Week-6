import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
function App() {
  const [count, setCount] = useState(0);

  return <MultiStepForm />;
}

export default App;
