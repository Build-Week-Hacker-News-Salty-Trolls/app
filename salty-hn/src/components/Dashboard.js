import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import CommentCards from './CommentCards'

import { getUsers, getDummyData } from '../actions'

export const UserDashboard = () => {
    const userData = useSelector(state => state.dumpData)
    const loading = useSelector(state => state.isFetching)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     axios
    //         .get('https://cors-anywhere.herokuapp.com/https://salty-salt.herokuapp.com/salty-users')
    //         .then(res => {
    //             console.log('data dump res', res.data)
    //             setAllData(res.data)
    //         })
    //         .catch(err => console.log('There was an error', err))
    // }, [])

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getDummyData())
    }, [])

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }

    console.log('USER DATAA', userData)
    return (
        <div>
            {userData.map(data => {
                return (
                    <CommentCards userInfo={data} key={data.ranking} />)

            })}
        </div>

    )
}