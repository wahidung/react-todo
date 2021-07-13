import React, { useState } from 'react';
import Todo from './../components/Todo';
import Header from './../layouts/Header';

function Home() {
  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <Header title="Add task" back={true} rightIcon={false} />
      <div className="p-3">
        <p>Add Task</p>
      </div>
    </div>
  );
}

export default Home;
