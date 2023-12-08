const NewTodo = ({ todo }) => {
  return (
    <div className="task">
      <h2>{todo}</h2>
      <h3>{todo.Todo}</h3>
      <p>{todo.Subtasks}</p>
    </div>
  );
};

export default NewTodo;
