import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <div >
      <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
