import React from 'react';
import { UserComments } from './UserComments'
import { useDispatch } from 'react-redux'

import { getUserComments } from '../actions'
import { UserCardStyled } from './Styling';


const CommentCards = ({ userInfo, props }) => {
    const dispatch = useDispatch()
    return (
        <UserCardStyled>
            <h2>Username: {userInfo.author}</h2>
            <p>Total Salty Score:{userInfo.total_score}</p>
            <p>Saltiness Rank:{userInfo.ranking}</p>
            <button onClick={() => {
                props.history.push(`/user-comments/${userInfo.author}`)
            }}>{`View ${userInfo.author}'s Saltiest Comments`}</button>
        </UserCardStyled>
    )
}

export default CommentCards