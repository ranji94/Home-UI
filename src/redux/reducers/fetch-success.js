import { SET_FETCH_SUCCESS } from '../action-types'

const initialState = {
    fetchSuccess: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FETCH_SUCCESS: {
            const { content } = action.payload
            return {
                ...state,
                fetchSuccess: content
            }
        }
        default:
            return state
    }
}