import { axiosWithAuth } from '../utils/AxiosWithAuth'

export const GET_COMMENTS_START = 'GET_COMMENTS_START';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';

export const getComments = () => dispatch => {
    dispatch({ type: GET_COMMENTS_START })
    axiosWithAuth()
        .get('/salty-comments')
        .then(res => {
            console.log(res)
            dispatch({ type: GET_COMMENTS_SUCCESS, payload: res })
            console.log('yes')
        })
        .catch(err => dispatch({ type: GET_COMMENTS_FAIL, payload: err.response }))
}