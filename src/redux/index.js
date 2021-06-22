import {combineReducers} from 'redux'


import { countReducer } from './reducers/countReducer'
import { nameReducer } from './reducers/nameReducer'
import { usersReducer } from './reducers/usersReducer'
import { postReducer } from './reducers/postReducer'

const mainReducer = combineReducers({
     count : countReducer,
     name : nameReducer, 
     users : usersReducer,
     posts :postReducer
})

export default mainReducer;