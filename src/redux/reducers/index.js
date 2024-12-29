import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form'

//TODO study the correct definition of a reducer
export default combineReducers({
    form:reduxFormReducer
})