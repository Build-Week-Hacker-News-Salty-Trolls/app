import React from 'react';
import { NavBarStyled } from './Styling';

const NavBar = () => {

    return(
        <NavBarStyled>
                <p>Your UserName</p>
                <a href="/home">Log Out</a>
                <a href="">Saved Comments</a>
                <a href="">Comments</a>
                <a href="/home">Usernames</a>
        </NavBarStyled>
    )
}

export default NavBar