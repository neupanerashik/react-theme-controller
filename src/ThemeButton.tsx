import React from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeButtonProps {
  className?: string;
  iconClassName?: string; //Use font awesome icon
  children: React.ReactNode;
}

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
