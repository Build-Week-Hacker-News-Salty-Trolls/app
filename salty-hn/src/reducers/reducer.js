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
    LOGIN_FAIL,
    START_DATA_FETCH,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    EDIT_USER_START,
    EDIT_USER_FAIL,
    EDIT_USER_SUCCESS,
    SAVE_COMMENT,
    DELETE_COMMENT,
    FILTER_COMMENTS
} from '../actions'


const initialState = {
    // Will house saved comments
    savedComments: [],
    data: [],
    // 18k misc salty comments  
    dummyData: [],
    // Top 100 saltiest users
    saltiestUsers: [],
    // Top 10 comments by a specific user(Get this by clicking 'view comments') dynamic render
    userComments: [],
    // Be sure to change this data point once you can actually login, this is place holder data!
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
        case START_DATA_FETCH:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                loginData: action.payload
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case USER_REGISTER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                data: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case EDIT_USER_START:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case EDIT_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case SAVE_COMMENT:
            return {
                ...state,
                savedComments: ([...state.savedComments, action.payload])
            }
        case DELETE_COMMENT:
            return {
                ...state,
                savedComments: state.savedComments.filter(({ salty_score }) => salty_score !== action.payload)
            }
        case FILTER_COMMENTS:
            return {
                ...state,
                userComments: state.userComments.filter(comment => comment !== action.payload)
            }
        default:
            return state
    }
}