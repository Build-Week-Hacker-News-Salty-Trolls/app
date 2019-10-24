import React from 'react';
import { NavBarStyled } from './Styling';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <NavBarStyled>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/saved-comments'>Saved Comments</Link>
            <Link to='/comments'>Search</Link>
            <Link to='/home'>Saltiest Users</Link>
        </NavBarStyled>
    )
}

export default NavBar