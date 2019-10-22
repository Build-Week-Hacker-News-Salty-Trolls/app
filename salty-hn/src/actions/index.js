import { axiosWithAuth } from '../utils/AxiosWithAuth'
import axios from 'axios'

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const GET_DUMMY_START = 'GET_DUMMY_START';
export const GET_DUMMY_SUCCESS = 'GET_DUMMY_SUCCESS';
export const GET_DUMMY_FAIL = 'GET_DUMMY_FAIL';

export const getUsers = () => dispatch => {
    dispatch({ type: GET_USERS_START })
    axios
        .get('https://salty-salt.herokuapp.com/salty-users')
        .then(res => {
            console.log('res in getUSERS', res)
            dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_USERS_FAIL, payload: err.response }))
}

export const getDummyData = () => dispatch => {
    dispatch({ type: GET_DUMMY_START })
    axios
        .get('https://salty-salt.herokuapp.com/dump')
        .then(res => {
            console.log('res in getDUMMY', res)
            dispatch({ type: GET_DUMMY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_DUMMY_FAIL, payload: err.response }))
}