import Column from "./Column";
import AddNewTask from "./AddNewTask";

const Board = () => {
  return (
    <div>
      <div>
        <AddNewTask />
        <Column />
      </div>
    </div>
  );
};

export default Board;
