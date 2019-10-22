import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getComments } from '../actions'

export const UserDashboard = () => {
    const data = useSelector(state => state.data)
    const loading = useSelector(state => state.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [])

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }

    console.log(data)
    return (
        <p>Dash</p>
    )
}