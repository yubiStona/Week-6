import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReducerComp from "./hooks/UseReducer";
import { ThemeProvider } from "./hooks/useContext/themeContext";
import ThemeButton from "./components/ThemeButton";
import ExpensiveComp from "./hooks/useMemo/ExpensiveComp";
import Navbar from "./components/Navbar";
function App() {
  return (
    <ThemeProvider>
      <ReducerComp />
      <ThemeButton />
      <ExpensiveComp />
    </ThemeProvider>
  );
}

export default App;
