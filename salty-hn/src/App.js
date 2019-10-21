import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FormikUserLogin from './components/UserLogin';
import FormikUserRegistration from './components/UserRegister';

function App() {
  return (
    <div className="App">
      <p>Salty Hackers</p>
      <Router>
        <Route exact path="/" render={props => <App {...props} />} />
        <Route path="/components/UserLogin" render={props => <FormikUserLogin {...props} />} />
        <Route path="/components/UserRegister" render={props => <FormikUserRegistration {...props} />} />
      </Router>
    </div>
  );
}

export default App;
