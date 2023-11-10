// import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import AllBoards from "./components/AllBoards";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
      <div className="containerCreate">
        <AllBoards />
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;
