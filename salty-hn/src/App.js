import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FormikUserLogin from './components/UserLogin';
import FormikUserRegistration from './components/UserRegister';
import { EditUser } from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/Login" render={props => <FormikUserLogin {...props} />} />
        <Route path="/Register" render={props => <FormikUserRegistration {...props} />} />
        <Route path='/EditUser' component={EditUser} />
      </Router>
    </div>
  );
}

export default App;
