import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import AddTask from './pages/AddTask';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
