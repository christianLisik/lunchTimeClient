import {createStore} from 'redux';
import userReducer from './ControlUserState/Reducer.js';

const store = createStore(userReducer)

export default store;