import React from 'react';
import { NavBarStyled } from './Styling';


const NavBar = () => {
    return (
        <NavBarStyled>
            <a href='/login'>Login</a>
            <a href='/register'>Register</a>
            <a href='/saved-comments'>Saved Comments</a>
            <a href='/comments'>Search</a>
            <a href='/home'>Saltiest Users</a>
        </NavBarStyled>
    )
}

export default NavBar