import React, { useState } from "react";
import "../checkbox.scss";
import "../swipe-to-delete.scss";
import SwipeToDelete from "react-swipe-to-delete-component";
function Todo({ id, title, color, checked, updateChecked, deleteTodo }) {
  return (
    <SwipeToDelete onDelete={deleteTodo} key={id} item={id}>
      <div className="p-3 bg-white border-light">
        <div className={`todo ` + color}>
          <input
            id={id}
            type="checkbox"
            onChange={updateChecked}
            defaultChecked={checked}
          />
          <label htmlFor={id}>{title}</label>
        </div>
      </div>
    </SwipeToDelete>
  );
}

export default Todo;
