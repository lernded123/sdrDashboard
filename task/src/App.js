import "./App.css"; //possibly delete
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddNewColumn from "./components/AddNewColumn";
import AddNewTask from "./components/AddNewTask";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AddNewSubTask from "./components/AddNewSubTask";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
