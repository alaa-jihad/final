// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WeatherApp from './com/weatherapp';
import Profile from './com/profile';
import Login from './com/login';
import SignUp from './com/signup';
const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
        <Route path="/WeatherApp" exact component={WeatherApp} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;

