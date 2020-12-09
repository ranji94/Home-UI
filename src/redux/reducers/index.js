import { combineReducers } from 'redux'
import langCode from './lang-code'
import fetchSuccess from './fetch-success'
import measurements from './measurements'

export default combineReducers({
    fetchSuccess,
    measurements })