import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header.component';
import Footer from './components/Footer.component';
import Login from './components/Login.component';
import Dashboard from './components/Dashboard.component';
import EditUserComponent from './components/EditUser.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Redirect exact path="/" to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile/:id" component={EditUserComponent} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
