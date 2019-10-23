import React from 'react';
import { SearchCardStyled } from './Styling';
import { Link } from 'react-router-dom';

const GeneralCommentCards = (props) => {
    
    return(
        <SearchCardStyled>
            <h3>{props.username}</h3>
            <p>Salty Rank: {props.rank}</p>
            <p>Total Salty Score: {props.salty_score}</p>
            <Link to={`/user-comments/${props.username}`}><button>Saltiest Comments from {props.username}</button></Link>
        </SearchCardStyled>
    )
}

export default GeneralCommentCards