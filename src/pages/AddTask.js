import React, { useState } from "react";
import Todo from "./../components/Todo";
import Header from "./../layouts/Header";
import { Redirect } from "react-router-dom";
import { URL, KEY } from "./../config/db";
import axios from "axios";

function AddTask() {
  const [redirect, setRedirect] = useState(false);
  const [todo, setTodo] = useState();
  const [loading, setLoading] = useState(false);

  const saveTask = (e) => {
    e.preventDefault();
    setLoading(true);
    const color = ["blue", "red", "orange", "yellow"];
    const randomColor = color[Math.floor(Math.random() * color.length)];

    let data = {
      name: todo,
      color: randomColor,
      isChecked: false,
    };

    axios
      .post(URL + "allTodo/rows", JSON.stringify(data), {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      })
      .then((res) => {
        setTodo("");
        setRedirect(true);
        setLoading(false);
      });

    // setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <Header title="Add task" back={true} rightIcon={false} />
      <div className="p-3">
        <form onSubmit={saveTask}>
          <div className="form-group">
            <label className="col-form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Belajar hal baru"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              required
            />
          </div>
          <div className="bottom">
            {loading ? (
              <button
                type="submit"
                className="btn btn-success btn-block"
                disabled
              >
                Process Saving ...
              </button>
            ) : (
              <button type="submit" className="btn btn-success btn-block">
                Create a Task
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
