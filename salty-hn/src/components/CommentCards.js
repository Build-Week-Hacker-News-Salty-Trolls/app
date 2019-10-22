import React from 'react';

const CommentCards = ({ userInfo }) => {
    return (
        <div>
            <h2>Username: {userInfo.author}</h2>
            <p>Total Karma:{userInfo.total_score}</p>
            <p>Saltiness Rank:{userInfo.ranking}</p>
        </div>
    )
}

export default CommentCards