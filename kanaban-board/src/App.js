// import { useState, useEffect } from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import AllBoards from "./components/AllBoards";
import NewTodoAdded from "./components/NewTodoAdded";
import Board from "./components/Board";
import "./index.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const [todo, setTodos] = useState([
    {
      id: 1,
      Todo: "Build UI",
      Description: "Build a UI to do something",
      Subtasks: "Add UI",
      Subtasks1: "Add UI 2",
    },
    {
      id: 2,
      Todo: "Web design",
      Description: "Design web",
      Subtasks: "Add front",
      Subtasks1: "Add back",
    },
    {
      id: 3,
      Todo: "Murder Crows",
      Description: "Murder some crows",
      Subtasks: "kills crows",
      Subtasks1: "silence dead crows",
    },
  ]);

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
