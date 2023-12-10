import { FaTimes } from "react-icons/fa";

const NewDoing = ({ doing, onDelete }) => {
  return (
    <div className="doing">
      <h3>
        {doing.Todo}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(doing.id)}
        />
      </h3>
      <p>{doing.Subtasks}</p>
    </div>
  );
};

export default NewDoing;
