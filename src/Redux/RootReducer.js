import {combineReducers} from 'redux';
import userReducer from './ControlUserState/Reducer.js';
import foodReducer from './ControlFoodState/Reducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    food:foodReducer
})

export default rootReducer;