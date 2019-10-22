import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FormikUserLogin from './components/UserLogin';
import FormikUserRegistration from './components/UserRegister';
import { EditUser } from './components/EditUser';
import { UserDashboard } from './components/Dashboard';
import { UserComments } from './components/UserComments'




function App() {
  return (
    <div className='App'>
      <p>hack_salt - The saltiest Hacker News trolls, all in one place!</p>
      <Router>
        <Route path="/Login" render={props => <FormikUserLogin {...props} />} />
        <Route path="/Register" render={props => <FormikUserRegistration {...props} />} />
        <Route path='/home' component={UserDashboard} />
        <Route path='/user-comments/:author' component={UserComments} />
      </Router>
    </div>
  );
}

export default App;
