import React, { Component } from 'react';
import HomePage from '../pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router>
    <div>
      <Route exact path="/"
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default App;