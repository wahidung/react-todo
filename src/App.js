import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { RecoilRoot, atom } from "recoil";

const themeState = atom({
  key: "theme", // unique ID (with respect to other atoms/selectors)
  default: "light", // default value (aka initial value)
});

export default function App() {
  return (
    <RecoilRoot>
      <Switch>
        <Route path="/add">
          <AddTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </RecoilRoot>
  );
}
