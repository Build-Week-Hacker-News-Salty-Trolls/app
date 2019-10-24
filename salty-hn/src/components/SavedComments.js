import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

export const SavedComments = () => {
    const savedInState = useSelector(state => state.savedComments)
    const [savedComments, setSavedComments] = useState([])

    // useEffect(() => {
    //     setSavedComments([localStorage.comments])
    // }, [])

    console.log('saved Comments', savedComments)
    return (
        <div>
            {savedInState.map(comment => {
                return (
                    <>
                        <p>{comment.text}</p>
                        <button onClick={() => localStorage.clear(savedComments)}>Delete Comments</button>
                    </>
                )
            })}
        </div>
    )
}