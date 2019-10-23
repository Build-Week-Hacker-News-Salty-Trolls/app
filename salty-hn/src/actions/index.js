import { axiosWithAuth } from '../utils/AxiosWithAuth'
import axios from 'axios'

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const GET_DUMMY_START = 'GET_DUMMY_START';
export const GET_DUMMY_SUCCESS = 'GET_DUMMY_SUCCESS';
export const GET_DUMMY_FAIL = 'GET_DUMMY_FAIL';

export const GET_USER_COMMENT_START = 'GET_USER_COMMENT_START';
export const GET_USER_COMMENT_SUCCESS = 'GET_USER_COMMENT_SUCCESS';
export const GET_USER_COMMENT_FAIL = 'GET_USER_COMMENT_FAIL';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const SAVE_START = 'SAVE_START'
export const SAVE_SUCCESS = 'SAVE_SUCCESS'

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
        .get('https://salty-salt.herokuapp.com/user-dump')
        .then(res => {
            console.log('res in getDUMMY', res)
            dispatch({ type: GET_DUMMY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_DUMMY_FAIL, payload: err.response }))
}

export const getUserComments = (userName) => dispatch => {
    dispatch({ type: GET_USER_COMMENT_START })
    axios
        .get(`https://salty-salt.herokuapp.com/user-comments/${userName}`)
        .then(res => {
            console.log('res in getUSER_COMMENT', res)
            dispatch({ type: GET_USER_COMMENT_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_USER_COMMENT_FAIL, payload: err.response }))
}

export const userLogin = loginInfo => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('login point here', loginInfo)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response }))
}

//This action handles user registration push the inputed data to BE server 

// export const userRegister = userInfo => dispatch => {
//     dispatch({ type: USER_REGISTER_START })
//     axiosWithAuth()
//         .post('API HERE', userInfo)
//         .catch(err => dispatch({ type: USER_REGISTER_FAIL, payload: err.response }))
// }

// this action handles user editing taking the inputs from the EditUser component and over writting the existing data

// export const editUser = (userInfo, id) => dispatch => {
//     dispatch({ type: EDIT_USER_START})
//     axiosWithAuth()
//         .put('api here w/ userid', userInfo)
//         .catch(err => dispatch({type: EDIT_USER_FAIL, payload: err.response}))
// }


// This action will push the selected comment into the end point that holds saved comments

export const saveComment = (comment) => dispatch => {
    dispatch({ type: SAVE_START })
    axiosWithAuth()
        .post('Saved comment endpoint here', comment)
        .then(dispatch({ type: SAVE_SUCCESS, payload: comment }))
    console.log(comment)
}

// this action will remove any saved comment the user doesn't want to see anymore

// export const deleteSavedComment = id => dispatch => {
//     dispatch({ type: START_DELETE })
//     axiosWithAuth()
//         .delete('ENDPOINT HERE PLS')
//         .catch(err => dispatch({ type: DELETE_FAIL, payload: err.response }))
// }