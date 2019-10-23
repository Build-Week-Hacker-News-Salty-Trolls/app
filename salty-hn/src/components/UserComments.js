import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ContainerStyled, UserCardStyled } from './Styling';

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
        <ContainerStyled>
            <h2>{props.match.params.author}</h2>
            {comments.map(comment => {
                return (
                    <UserCardStyled>
                        <p>Salty Score:{comment.salty_score}</p>
                        <p>{comment.text}</p>
                    </UserCardStyled>
                )
            })}

        </ContainerStyled>
    )
}