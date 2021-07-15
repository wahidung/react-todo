import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

export default function App() {
  return (
    <Switch>
      <Route path="/add">
        <AddTask />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
