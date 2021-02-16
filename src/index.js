import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import Reddit from './Dashboard/dashboard';
import Login from './Login/login';
import Signup from './Signup/signup';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Signup</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/"><Signup /></Route>
            <Route exact path="/dashboard"><Reddit /></Route>
            <Route exact path="/login"><Login /></Route>
          </Switch>


        </div>
      </Router>
    </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);