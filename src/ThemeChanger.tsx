import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeChanger: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const getIcon = () => {
    switch (theme) {
      case "light":
        return "fa-solid fa-moon";
      case "dark":
        return "fa-solid fa-sun";
      default:
        break;
    }
  };
  return (
    <div>
      <button
        className="btn btn-sm btn-filled btn-primary-color rounded-3"
        onClick={toggleTheme}
      >
        <i className={getIcon()}></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
