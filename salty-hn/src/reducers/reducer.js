import {
    GET_COMMENTS_START,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL
} from '../actions'

const initialState = {
    data: [],
    isFetching: false,
    error: '',
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                data: action.payload
            }
        case GET_COMMENTS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}