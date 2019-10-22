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
    return (
        <div>
            {comments.map(comment => {
                return (
                    <p>{comment.text}</p>
                )
            })}

        </div>
    )
}