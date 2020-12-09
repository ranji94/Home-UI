import { SET_MEASUREMENTS } from '../action-types'

const initialState = {
    measurements: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MEASUREMENTS: {
            const { content } = action.payload
            return {
                ...state,
                measurements: content
            }
        }
        default:
            return state
    }
}