import { axiosWithAuth } from '../utils/AxiosWithAuth'
import axios from 'axios'

export const REQUEST_START = 'REQUEST_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const GET_DUMMY_SUCCESS = 'GET_DUMMY_SUCCESS';

export const GET_USER_COMMENT_SUCCESS = 'GET_USER_COMMENT_SUCCESS';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const SAVE_COMMENT = 'SAVE_COMMENT'

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';

export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'

export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FILTER_COMMENTS = 'FILTER_COMMENTS'



export const getUsers = () => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .get('https://salty-salt.herokuapp.com/salty-users')
        .then(res => {
            dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: REQUEST_FAIL, payload: err.response }))
}

export const getDummyData = () => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .get('https://salty-salt.herokuapp.com/user-dump')
        .then(res => {
            dispatch({ type: GET_DUMMY_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: REQUEST_FAIL, payload: err.response }))
}

export const getUserComments = (userName) => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .get(`https://salty-salt.herokuapp.com/user-comments/${userName}`)
        .then(res => {
            dispatch({ type: GET_USER_COMMENT_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: REQUEST_FAIL, payload: err.response }))
}

export const userLogin = (loginInfo) => dispatch => {
    dispatch({ type: REQUEST_START })
    axiosWithAuth()
        .post('/login',
            `grant_type=password&username=${loginInfo.username}&password=${loginInfo.password}`,
            {
                headers: {
                    Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        )
        .then((res) => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            localStorage.setItem('token', res.data.access_token)
        })
        .catch(err => dispatch({ type: REQUEST_FAIL, payload: err.response }))
}

export const getUserData = () => dispatch => {
    dispatch({ type: REQUEST_START })
    axiosWithAuth()
        .get(`https://sethnadu-foodie-bw.herokuapp.com/users/users`)
        .then(res => {
            dispatch({ type: GET_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: REQUEST_FAIL, payload: err.response }))
}

//This action handles user registration push the inputed data to BE server 

export const userRegister = userInfo => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .post('https://sethnadu-foodie-bw.herokuapp.com/createnewuser', userInfo)
        .then(res => {
            dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('error', err)
            dispatch({ type: REQUEST_FAIL, payload: err.response })
        })
}

// this action handles user editing taking the inputs from the EditUser component and over writting the existing data

export const editUser = (userInfo, id) => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .put(`https://sethnadu-foodie-bw.herokuapp.com/users/user/23`, userInfo)
        .then(res => {
            dispatch({ type: EDIT_USER_SUCCESS })
        })
        .catch(err => dispatch({ type: REQUEST_FAIL, payload: err.response }))
}

// This action will push the selected comment into the end point that holds saved comments

export const saveComment = (comment) => dispatch => {
    dispatch({ type: SAVE_COMMENT, payload: comment })
    dispatch({ type: FILTER_COMMENTS, payload: comment })
}


export const deleteComment = saltyScore => dispatch => {
    dispatch({ type: DELETE_COMMENT, payload: saltyScore })
}
// this action will remove any saved comment the user doesn't want to see anymore

// export const deleteSavedComment = id => dispatch => {
//     dispatch({ type: START_DELETE })
//     axiosWithAuth()
//         .delete('ENDPOINT HERE PLS')
//         .catch(err => dispatch({ type: DELETE_FAIL, payload: err.response }))
// }