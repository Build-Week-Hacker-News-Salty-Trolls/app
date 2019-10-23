import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import {editUser} from '../actions'

export const EditUser = () => {
    // const currentInfo = useSelector(state => state.loginData)
    const [userInfo, setUserInfo] = useState(useSelector(state => state.loginData))
    const dispatch = useDispatch()

    const handleChanges = e => {
        e.preventDefault()
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    return (
        // <form onSubmit={() => dispatch(editUser(userInfo, userInfo.id))}>
        // This form tag is a place holder until I get my API end points
        <form>
            <input
                type='text'
                name='firstname'
                placeholder='First Name'
                value={userInfo.firstname}
                onChange={handleChanges}
            />
            <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                onChange={handleChanges}
                value={userInfo.lastname}
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChanges}
                value={userInfo.email}
            />
            <input
                type='test'
                name='username'
                placeholder='User Name'
                onChange={handleChanges}
                value={userInfo.username}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChanges}
                value={userInfo.password}
            />
            <button type='submit'>Update Profile</button>
        </form>
    )
}