import {
    SET_FETCH_SUCCESS,
    SET_MEASUREMENTS } from './action-types'

export const setFetchSuccess = (content) => {
    return {
        type: SET_FETCH_SUCCESS,
        payload: {
            content
        }
    }
}

export const setMeasurements = (content) => {
    return {
        type: SET_MEASUREMENTS,
        payload: {
            content
        }
    }
}