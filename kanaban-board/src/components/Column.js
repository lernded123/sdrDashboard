import NewTodoAdded from "./NewTodos";
import { useState } from "react";

const Column = () => {
  const [todo, setTodos] = useState([
    {
      ListType: "Todo",
      id: 1,
      Todo: "Build UI",
      Description: "Build a UI to do something",
      Subtasks: "Add UI",
      Subtasks1: "Add UI 2",
    },
    {
      ListType: "Todo",
      id: 2,
      Todo: "Web design",
      Description: "Design web",
      Subtasks: "Add front",
      Subtasks1: "Add back",
    },
    {
      ListType: "Todo",
      id: 3,
      Todo: "Murder Crows",
      Description: "Murder some crows",
      Subtasks: "kills crows",
      Subtasks1: "silence dead crows",
    },
  ]);

  // Delete Task
  const deleteTodo = (id) => {
    console.log("delete", id);
  };

  return (
    <section className="containerMultiple">
      <section className="containerColumn">
        <div>
          <h1>Todo</h1>
        </div>
        <div>
          <NewTodoAdded todo={todo} onDelete={deleteTodo} />
        </div>
      </section>
      <section className="containerColumn">
        <div>
          <h1>Doing</h1>
        </div>
        <div>
          <NewTodoAdded todo={todo} />
        </div>
      </section>
      <section className="containerColumn">
        <div>
          <h1>Done</h1>
        </div>
        <div>
          <NewTodoAdded todo={todo} />
        </div>
      </section>
    </section>
  );
};

export default Column;
