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
        <Route path="/Login" render={props => <FormikUserLogin {...props} />} />
        <Route path="/Register" render={props => <FormikUserRegistration {...props} />} />
      </Router>
    </div>
  );
}

export default App;
