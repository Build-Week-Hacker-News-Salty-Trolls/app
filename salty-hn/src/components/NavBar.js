import React from 'react';
import { Link, Router } from 'react-router-dom';

const NavBar = () => {

    return(
        <nav>
                <p>Your UserName</p>
                <a href="/home">Log Out</a>
                <a href="">Saved Comments</a>
                <a href="">Comments</a>
                <a href="/home">Usernames</a>
        </nav>
    )
}

export default NavBar