// import { useState, useEffect } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import AllBoards from "./components/AllBoards";
import NewTodoAdded from "./components/NewTodoAdded";
import Board from "./components/Board";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Board />

      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;

// <Router>
//       <div>
//         <Header />
//       </div>
//       <div className="boardFlex">
//         <AllBoards />
//       </div>
//       <div>
//         <AddNewTodo todo={todo} />
//       </div>
//       <Routes>
//         <Route></Route>
//       </Routes>
//     </Router>
