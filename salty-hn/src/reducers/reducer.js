import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_DUMMY_START,
    GET_DUMMY_SUCCESS,
    GET_DUMMY_FAIL,
    GET_USER_COMMENT_START,
    GET_USER_COMMENT_SUCCESS,
    GET_USER_COMMENT_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions'

const initialState = {
    data: [],
    // 18k misc salty comments  
    dummyData: [],
    // Top 100 saltiest users
    saltiestUsers: [],
    // Top 10 comments by a specific user(Get this by clicking 'view comments')
    userComments: [],
    loginData: {},
    isFetching: false,
    error: '',
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isFetching: false,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                loginData: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_USERS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                saltiestUsers: action.payload
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_DUMMY_START:
            return {
                ...state,
                isFetching: false,
                error: '',
            }
        case GET_DUMMY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                dummyData: action.payload
            }
        case GET_DUMMY_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_USER_COMMENT_START:
            return {
                ...state,
                isFetching: false,
                error: '',
            }
        case GET_USER_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                userComments: action.payload
            }
        case GET_USER_COMMENT_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}