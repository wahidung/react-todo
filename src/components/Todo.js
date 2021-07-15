import React, { useState } from "react";
import "../checkbox.scss";
import "../swipe-to-delete.scss";
import SwipeToDelete from "react-swipe-to-delete-component";
import { URL, KEY } from "../config/db";
import axios from "axios";

function Todo({ id, title, color, checked }) {
  // Declare a new state variable, which we'll call "count"

  const updateChecked = (e) => {
    let data = {
      isChecked: e.target.checked,
    };

    axios
      .patch(URL + `/` + e.target.id, JSON.stringify(data), {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      })
      .then((res) => {
        // console.log(res);
      });
  };

  const deleteTodo = (e) => {
    axios
      .delete(URL + `/` + e.item, {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      })
      .then((res) => {
        // console.log(res);
      });
  };

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
          <label for={id}>{title}</label>
        </div>
      </div>
    </SwipeToDelete>
  );
}

export default Todo;
