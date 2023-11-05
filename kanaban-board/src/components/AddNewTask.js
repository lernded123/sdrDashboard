import React from "react";

const AddNewTask = (props) => {
  return (props.tigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">close</button>
        {props.children}
      </div>
    </div>
  );
};
