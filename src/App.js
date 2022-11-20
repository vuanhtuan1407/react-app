import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";
import { useState, useContext, createContext } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={() => console.log(1)}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
