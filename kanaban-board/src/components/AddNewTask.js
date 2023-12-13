import { useState } from "react";

const AddNewTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, description, subtasks });

    setText("");
    setDescription("");
    setSubtasks("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Subtasks</label>
        <input
          type="text"
          value={subtasks}
          onChange={(e) => setSubtasks(e.target.value)}
        />
        <input type="submit" value="Add SubTask" className="btn btn-block" />
      </div>
      <div className="form-control">
        <label>Current Status</label>
        <input type="text" />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddNewTask;
