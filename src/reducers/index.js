import { FETCHING_GIF, FETCHING_GIF_SUCCESS, FETCHING_GIF_FAILURE } from '../actions'

const initialState = {
    isFetching: false,
    gif: '',
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCHING_GIF):
            return ({
                ...state,
                isFetching: true,
                error: ''
            })
        case (FETCHING_GIF_SUCCESS):
            return ({
                ...state,
                isFetching: false,
                gif: action.payload
            })
        case (FETCHING_GIF_FAILURE):
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state;

    }
}