import {
    REQUEST_START,
    REQUEST_FAIL,
    GET_USERS_SUCCESS,
    GET_DUMMY_SUCCESS,
    GET_USER_COMMENT_SUCCESS,
    LOGIN_SUCCESS,
    GET_DATA_SUCCESS,
    USER_REGISTER_SUCCESS,
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
        case REQUEST_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                loginData: action.payload
            }
        case REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                saltiestUsers: action.payload
            }
        case GET_DUMMY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                dummyData: action.payload
            }
        case GET_USER_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                userComments: action.payload
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                loginData: action.payload
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                data: action.payload
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