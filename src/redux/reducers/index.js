import userReducer from './user'
import accountReducer from './account'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
    account:accountReducer,
    user:userReducer
})
export default rootReducer