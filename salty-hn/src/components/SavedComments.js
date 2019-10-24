import React from 'react';
import { useSelector } from 'react-redux'

export const SavedComments = () => {
    const savedInState = useSelector(state => state.savedComments)
    console.log('saved Comments', savedInState)



    return (
        <div>
            {savedInState.map(comment => {
                return (
                    <p>{comment.text}</p>
                )
            })}
        </div>
    )
}