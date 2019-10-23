import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import CommentCards from './CommentCards'
import { ContainerStyled } from './Styling';

import { getUsers, getDummyData, getUserComments } from '../actions'

export const UserDashboard = props => {
    const userData = useSelector(state => state.saltiestUsers)
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
        <ContainerStyled>
            {userData.map(data => {
                return (
                    <CommentCards userInfo={data} key={data.ranking} props={props} />)
            })}
        </ContainerStyled>

    )
}