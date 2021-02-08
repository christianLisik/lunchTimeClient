import { USER_LOGIN_IN, USER_LOG_OUT, USER_CAN_ORDER, USER_CAN_NOT_ORDER } from './Types.js';

export const userLoginIn = () => {
    return {
        type: USER_LOGIN_IN
    }
}

export const userLogOut = () => {
    return {
        type: USER_LOG_OUT
    }
}

export const userCanOrder = () => {
    return {
        type: USER_CAN_ORDER
    }
}

export const userCanNotOrder = () => {
    return {
        type: USER_CAN_NOT_ORDER
    }
}