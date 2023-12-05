// import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import AllBoards from "./components/AllBoards";
import AddNewTask from "./components/AddNewTask";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
      <div>
        <AllBoards />
      </div>
      <div>
        <AddNewTask />
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;
