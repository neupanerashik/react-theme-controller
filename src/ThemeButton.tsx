import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button className={props.className} onClick={toggleTheme}>
        {props.children}
      </button>
    </div>
  );
};

export default ThemeButton;
