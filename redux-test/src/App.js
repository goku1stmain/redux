import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
};

export default App;
