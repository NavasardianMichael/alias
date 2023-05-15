import { SET_CORRECT_ANSWERS, SET_CORRECT_WORD, SET_STAGE, SET_STATE, SET_USER_NAME, UNDO_CORRECT_WORD } from "./actionTypes"

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

export const setState = (state) => {
    return {
        type: SET_STATE,
        payload: state
    }
}

export const setCorrectWord = (word) => {
    return {
        type: SET_CORRECT_WORD,
        payload: word
    }
}

export const undoCorrectWord = (word) => {
    return {
        type: UNDO_CORRECT_WORD,
        payload: word
    }
}

export const setCorrectAnswers = (answers) => {
    return {
        type: SET_CORRECT_ANSWERS,
        payload: answers
    }
}