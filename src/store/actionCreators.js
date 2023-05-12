import { SET_STAGE, SET_USER_NAME } from "./actionTypes"

export const setUserData = (pair) => {
    return {
        type: SET_USER_NAME,
        payload: pair
    }
}

export const setStage = (stage) => {
    return {
        type: SET_STAGE,
        payload: stage
    }
}