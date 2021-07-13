import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Todo from './../components/Todo';
import Header from './../layouts/Header';
function Home() {
  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <Header title="Board" rightIcon={true} />
      <div className="p-3">
        <div className="todos">
          <Todo title="Belajar React JS dari awal" color="red" />
          <Todo title="Belajar React JS dari awal" color="blue" />
        </div>
        <div className="bottom">
          <Link to="/add" className="btn btn-success btn-block">
            Add a Task
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
