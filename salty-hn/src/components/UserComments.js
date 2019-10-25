import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ContainerStyled, CommentCardStyled } from './Styling';

import { getUserComments, saveComment } from '../actions'


export const UserComments = props => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.userComments)
    const savedComment = useSelector(state => state.savedComments)
    const loading = useSelector(state => state.isFetching)


    useEffect(() => {
        dispatch(getUserComments(props.match.params.author))
    }, [])

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }

    comments.filter(com => com !== savedComment)

    return (
        <ContainerStyled>
            <h2>{props.match.params.author}</h2>
            {comments.map(comment => {
                return (
                    <CommentCardStyled>
                        <p>Salty Score: {comment.salty_score}</p>
                        <p>{comment.text}</p>
                        <button onClick={() => dispatch(saveComment(comment))}>Save Comment</button>
                    </CommentCardStyled>
                )
            })}
        </ContainerStyled>
    )
}