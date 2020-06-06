import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Router, Switch, Route } from "react-router-dom";
import './App.css';

import NavComp from './components/navBar/navBar';
import Home from "./components/home/home";
import lastWeek from './components/reports/lastWeek';
import lastMonth from './components/reports/previousMonth';
import customReport from './components/reports/customReport';

import history from '../src/helpers/history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <NavComp />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/lastweek" component={lastWeek} />
          <Route path="/lastmonth" component={lastMonth} />
          <Route path="/custom" component={customReport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;