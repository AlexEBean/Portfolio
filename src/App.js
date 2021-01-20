import React from "react"
import routes from './routes.js';
import './App.css';
import Header from "./components/Header/Header"

function App() {
  return (
    <div className = "App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
