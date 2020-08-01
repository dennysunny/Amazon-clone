import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Screens/Header'
import Home from './Screens/Home/Home'
import Checkout from './Screens/Checkout/Checkout'

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        
        <Route path = "/checkout" >
          <Header />
          <Checkout />
        </Route>
        <Route path = "/login">
          <h1>Login</h1>
        </Route>
        <Route path = "/" >
          <Header />
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
