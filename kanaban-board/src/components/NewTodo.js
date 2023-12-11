import { FaTimes } from "react-icons/fa";

const NewTodo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <h3>
        {todo.Todo}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(todo.id)}
        />
      </h3>
      <p>{todo.Subtasks}</p>
    </div>
  );
};

export default NewTodo;
