import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FormikLoginWrapper from './components/UserLogin';
import FormikUserRegistrationWrapper from './components/UserRegister';
import NavBar from './components/NavBar';
import CommentDashboard from './components/CommentDashboard';
import { EditUser } from './components/EditUser';
import { UserDashboard } from './components/Dashboard';
import { UserComments } from './components/UserComments';
import { Logo } from './components/Logo';

import { AppStyled, HeaderStyled } from './components/Styling';
import { SavedComments } from './components/SavedComments';
import { PrivateRoute } from './utils/PrivateRoute'




function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <h1>hs</h1>
        <p>The saltiest Hacker News trolls, all in one place!</p>
        <Logo />
      </HeaderStyled>
      <Router>
        <NavBar />
        <Route path="/Login" render={props => <FormikLoginWrapper {...props} />} />
        <Route path="/Register" render={props => <FormikUserRegistrationWrapper {...props} />} />
        <Route path='/edit-user' component={EditUser} />
        <PrivateRoute path='/home' component={UserDashboard} />
        <Route path='/user-comments/:author' component={UserComments} />
        <Route path='/saved-comments' component={SavedComments} />
        <Route path='/comments' component={CommentDashboard} />
      </Router>
    </AppStyled>
  );
}

export default App;
