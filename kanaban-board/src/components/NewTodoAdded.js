import NewTodo from "./NewTodo";

const AddNewTodo = ({ todo }) => {
  return (
    <>
      {todo.map((todo) => (
        <NewTodo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default AddNewTodo;
