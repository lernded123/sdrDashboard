import NewTodo from "./NewTodo";

const AddNewTodo = ({ todo, onDelete }) => {
  return (
    <>
      {todo.map((todo) => (
        <NewTodo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </>
  );
};

export default AddNewTodo;
