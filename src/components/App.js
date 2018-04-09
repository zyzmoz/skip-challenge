import React, { Component } from 'react';
import MenuComponent from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import HomePage from '../pages/Home';
import CartPage from '../pages/Cart';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

const App = () =>
  <Router >
    <div>
      <MenuComponent />
      <Route exact path="/"
        component={() => <HomePage />}
      />
      <Route exact path="/cart"
        component={() => <CartPage />}
      />
      <Route exact path="/login"
        component={() => <LoginPage /> }
      />
      <Route exact path="/signup"
        component={() => <SignUpPage />}
      />
    </div>
  </Router>

export default App;