import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import CommentCards from './CommentCards'

import { getUsers, getDummyData, getUserComments } from '../actions'

export const UserDashboard = props => {
    const userData = useSelector(state => state.dumpData)
    const loading = useSelector(state => state.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getDummyData())
    }, [])

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }

    return (
        <div>
            {userData.map(data => {
                return (
                    <CommentCards userInfo={data} key={data.ranking} props={props} />)
            })}
        </div>

    )
}