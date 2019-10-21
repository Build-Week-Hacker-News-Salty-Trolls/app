import React, { useState } from 'react';

export const EditUser = () => {
    const [userInfo, setUserInfo] = useState()

    const handleChanges = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    return (
        <form>
            <input
                type='text'
                name='firstname'
                placeholder='First Name'
                onChange={handleChanges}
            />
            <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                onChange={handleChanges}
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChanges}
            />
            <input
                type='test'
                name='username'
                placeholder='User Name'
                onChange={handleChanges}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChanges}
            />
        </form>
    )
}