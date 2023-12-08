import NewTodoAdded from "./NewTodoAdded";
import { useState } from "react";

const Column = () => {
  const [todo, setTodos] = useState([
    {
      listType: "Todo",
      id: 1,
      Todo: "Build UI",
      Description: "Build a UI to do something",
      Subtasks: "Add UI",
      Subtasks1: "Add UI 2",
    },
    {
      listType: "Todo",
      id: 2,
      Todo: "Web design",
      Description: "Design web",
      Subtasks: "Add front",
      Subtasks1: "Add back",
    },
    {
      listType: "Todo",
      id: 3,
      Todo: "Murder Crows",
      Description: "Murder some crows",
      Subtasks: "kills crows",
      Subtasks1: "silence dead crows",
    },
  ]);

  return (
    <div>
      <NewTodoAdded todo={todo} />
    </div>
  );
};

export default Column;
