import React from 'react';
import { UserCardStyled } from './Styling';
import { Link } from 'react-router-dom';

const GeneralCommentCards = (props) => {
    
    return(
        <UserCardStyled>
            <h3>{props.username}</h3>
            <p>{props.comment}</p>
            <p>{props.salty_score}</p>
            <Link to={`/user-comments/${props.username}`}><button>More Comments from {props.username}</button></Link>
        </UserCardStyled>
    )
}

export default GeneralCommentCards