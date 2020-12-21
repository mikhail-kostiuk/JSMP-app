import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new-challenge">
            <Login />
          </Route>
          <Route path="/active-challenge">
            <Login />
          </Route>
          <Route path="/challenge-result">
            <Login />
          </Route>
          <Route path="/task-archive">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
