import {useContext, useState} from 'react';
import './App.css';
import Form from './components/Form';
import ReactSwitch from "react-switch";
import { createContext } from 'react'



export const ThemeContext = createContext(null);

const App = () => {

const [theme, setTheme] = useState("dark")

const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light')
};


  return (
    <div>
<ThemeContext.Provider value={{theme, toggleTheme}}>
  <div className='App' id={theme}>
  <Form />
  <div className='switch'>
    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}>
    </ReactSwitch>
    <h1>  {theme === "dark" ? "theme is dark" : "Theme is light"}</h1>
  </div>
  </div>
</ThemeContext.Provider>

    </div>
  )
}

export default App


