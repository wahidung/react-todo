import React, { useState } from 'react';

function Todo({ title, color }) {
  // Declare a new state variable, which we'll call "count"
  return (
    <div className="p-3">
      <div className="todo">
        <label className="container-check">
          {title}
          <input type="checkbox" />
          <span className={`checkmark checkmark-` + color} />
        </label>
      </div>
    </div>
  );
}

export default Todo;
