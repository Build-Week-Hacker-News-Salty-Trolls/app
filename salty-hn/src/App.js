import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FormikUserLogin from './components/UserLogin';
import FormikUserRegistration from './components/UserRegister';
import NavBar from './components/NavBar';
import CommentDashboard from './components/CommentDashboard';
import { EditUser } from './components/EditUser';
import { UserDashboard } from './components/Dashboard';
import { UserComments } from './components/UserComments';

import { AppStyled, HeaderStyled } from './components/Styling';




function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <h1>hs</h1>
        <p>hack_salt - The saltiest Hacker News trolls, all in one place!</p>
      </HeaderStyled>
      <NavBar />
      <Router>
        <Route path="/Login" render={props => <FormikUserLogin {...props} />} />
        <Route path="/Register" render={props => <FormikUserRegistration {...props} />} />
        <Route path='/home' component={UserDashboard} />
        <Route path='/user-comments/:author' component={UserComments} />
        <Route path='/comments' component={CommentDashboard} />
      </Router>
    </AppStyled>
  );
}

export default App;
