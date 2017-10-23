import { combineReducers } from 'redux'
import textReducer from './textReducer'
import counterReducer from './counterReducer'

const reducers = combineReducers( { textReducer, counterReducer } )

export default reducers