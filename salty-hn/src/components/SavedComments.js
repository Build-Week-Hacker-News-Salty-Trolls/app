import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { deleteComment } from '../actions'

export const SavedComments = () => {
    const savedInState = useSelector(state => state.savedComments)
    const dispatch = useDispatch()
    const [savedComments, setSavedComments] = useState([])

    return (
        <div>
            {savedInState.map(comment => {
                return (
                    <>
                        <p>{comment.text}</p>
                        <button onClick={() => dispatch(deleteComment(comment.salty_score))}>Delete Comments</button>
                    </>
                )
            })}
        </div>
    )
}