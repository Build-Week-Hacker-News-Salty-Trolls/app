import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CommentCardStyled, SearchContainerStyled } from './Styling';

export const SavedComments = () => {
    const savedInState = useSelector(state => state.savedComments)
    const [savedComments, setSavedComments] = useState([])

    // useEffect(() => {
    //     setSavedComments([localStorage.comments])
    // }, [])

    console.log('saved Comments', savedComments)
    return (
        <SearchContainerStyled>
            <CommentCardStyled>
                {savedInState.map(comment => {
                    return (
                        <>
                            <p>{comment.text}</p>
                            <button onClick={() => localStorage.clear(savedComments)}>Delete Comments</button>
                        </>
                    )
                })}
            </CommentCardStyled>
        </SearchContainerStyled>
    )
}