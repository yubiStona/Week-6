import React from "react";
import { useTheme } from "../hooks/useContext/themeContext";
const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeButton;



