const todo = [
  {
    id: 1,
    TaskName: "Build UI",
    Description: "Build a UI to do something",
    Subtasks: "Add UI",
    Subtasks1: "Add UI 2",
  },
  {
    id: 2,
    TaskName: "Web design",
    Description: "Design web",
    Subtasks: "Add front",
    Subtasks1: "Add back",
  },
  {
    id: 3,
    TaskName: "Murder Crows",
    Description: "Murder some crows",
    Subtasks: "kills crows",
    Subtasks1: "silence dead crows",
  },
];

const AddNewTask = () => {
  return (
    <>
      {todo.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default AddNewTask;
