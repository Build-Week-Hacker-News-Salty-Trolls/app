import React from 'react';
import { UserComments } from './UserComments'
import { useDispatch } from 'react-redux'

import { getUserComments } from '../actions'


const CommentCards = ({ userInfo, props }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Username: {userInfo.author}</h2>
            <p>Total Karma:{userInfo.total_score}</p>
            <p>Saltiness Rank:{userInfo.ranking}</p>
            <button onClick={() => {
                props.history.push(`/user-comments/${userInfo.author}`)
            }}>{`View ${userInfo.author}'s Saltiest Comments`}</button>
        </div>
    )
}

export default CommentCards