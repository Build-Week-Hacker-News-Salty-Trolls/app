import React from 'react';
import { UserCardStyled } from './Styling';

const GeneralCommentCards = (props) => {
    
    return(
        <UserCardStyled>
            <h3>{props.username}</h3>
            <p>{props.comment}</p>
            <p>{props.salty_score}</p>
        </UserCardStyled>
    )
}

export default GeneralCommentCards