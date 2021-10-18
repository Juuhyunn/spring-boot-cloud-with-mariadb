import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Home, Navigation } from './features/common/index';
import { UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove } from './features/user/index'

function App() {
  return (<>
  <Home/>
  <Navigation/>
  <Switch>
    <Route exact path='/' component= { Home }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/add' component= { UserAdd }/>
    <Route exact path='/detail' component= { UserDetail }/>
    <Route exact path='/list' component= { UserList }/>
    <Route exact path='/login' component= { UserLogin }/>
    <Route exact path='/modify' component= { UserModify }/>
    <Route exact path='/remove' component= { UserRemove }/>    
  </Switch>

  </>);
}

export default App;
