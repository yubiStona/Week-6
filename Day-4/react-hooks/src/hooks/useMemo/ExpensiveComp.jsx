import { useState, useMemo, useCallback } from "react";
import Navbar from "../../components/Navbar";
const ExpensiveComp = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const getAdjective = useCallback(() => {
    return "another" + count;
  }, [count]); //freeze the function until the coun changes

  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation is running.....");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return count * 2;
  }, [count]); //recalculate when the count changes
  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <h2>Count: {count}</h2>
      <h3>Expensive calculation result: {expensiveValue}</h3>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle dark mode</button>
      <p>
        The expensive calculation only runs when count changes, not when we
        toggle dark mode!
      </p>
    </div>
  );
};
export default ExpensiveComp;
