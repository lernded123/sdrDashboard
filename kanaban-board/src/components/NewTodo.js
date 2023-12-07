const NewTodo = ({ todo }) => {
  return (
    <div className="task">
      <h3>{todo.Todo}</h3>
      <p>{todo.Subtasks}</p>
    </div>
  );
};

export default NewTodo;
