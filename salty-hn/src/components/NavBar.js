import React from 'react';
import { NavBarStyled } from './Styling';

const NavBar = () => {
    return (
        <NavBarStyled>
            <p>OUR UserName</p>
            <a href='/home'>Log Out</a>
            <a href='/saved-comments'>Saved Comments</a>
            <a href='/comments'>Search</a>
            <a href='/home'>Saltiest Users</a>
        </NavBarStyled>
    )
}

export default NavBar