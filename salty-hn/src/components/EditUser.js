import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserData } from '../actions'
import { editUser } from '../actions'

export const EditUser = props => {
    const currentInfo = useSelector(state => state.loginData)
    const loading = useSelector(state => state.isFetching)
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        dispatch(getUserData())
        setUserInfo(currentInfo)
    }, [])


    const handleChanges = e => {
        e.preventDefault()
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    console.log('this is user info', userInfo)
    if (loading) {
        return (
            <h2>fetching data </h2>
        )
    }

    return (
        // This form tag is a place holder until I get my API end points
        <form onSubmit={() => dispatch(editUser(userInfo, currentInfo.id))}>
            <input
                type='test'
                name='username'
                placeholder='User Name'
                onChange={handleChanges}
                value={userInfo.username}
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChanges}
                value={userInfo.email}
            />
            <button type='submit'>Update Profile</button>
        </form>
    )
}