import { USER_LOGIN_IN, USER_LOG_OUT } from './Types.js';
import { checkDateTime } from '../../Logic/CheckDateTime.js'


const initalState = {
    isUserLogged: false, //checkUserLogged(0)
    canUserOrder: checkDateTime()
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN_IN: return {
            ...state,
            isUserLogged: true
        }
        case USER_LOG_OUT: return {
            ...state,
            isUserLogged: false
        }
        default: return state
    }
}

export default userReducer;

