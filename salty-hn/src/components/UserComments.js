import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserComments } from '../actions'

export const UserComments = props => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.userComments)
    const loading = useSelector(state => state.isFetching)


    useEffect(() => {
        dispatch(getUserComments(props.match.params.author))
    }, [])

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }

    console.log('Comments in UC component', comments)
    return (
        <div className="comment-card">
            <h2>{props.match.params.author}</h2>
            {comments.map(comment => {
                return (
                    <div>
                        <p>Salty Score:{comment.salty_score}</p>
                        <p>{comment.text}</p>
                    </div>
                )
            })}

        </div>
    )
}