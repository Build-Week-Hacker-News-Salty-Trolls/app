import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ContainerStyled, CommentCardStyled } from './Styling';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom'

import { getUserComments, saveComment } from '../actions'
import { comment } from 'postcss';

export const UserComments = props => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.userComments)
    const loading = useSelector(state => state.isFetching)
    // const [commentToSave, setComment] = useLocalStorage(['comments'])



    useEffect(() => {
        dispatch(getUserComments(props.match.params.author))
    }, [])

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }


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