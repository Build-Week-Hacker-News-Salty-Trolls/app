import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import FormikUserLogin from './components/UserLogin';
import FormikUserRegistration from './components/UserRegister';

function App() {
  return (
    <div className="App">
      <p>Salty Hackers</p>
      <Route exact path="/" render={props => <App {...props} />} />
      <Route path="/components/UserLogin" render={props => <FormikUserLogin {...props} />} />
      <Route path="/components/UserRegister" render={props => <FormikUserRegistration {...props} />} />
    </div>
  );
}

export default App;
