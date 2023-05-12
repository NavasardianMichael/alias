import { STAGES } from "../helpers/constants/pages"
import { SET_STAGE, SET_USER_NAME } from "./actionTypes"

const initialState = {
    team1: {
        id: 'team1',
        name: '',
        correctWords: []
    },
    team2: {
        id: 'team2',
        name: '',
        correctWords: []
    },
    turn: '',
    stage: STAGES.start,
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
           return {
             ...state,
             team1: {
                ...state.team1,
                name: action.payload.team1
             },
             team2: {
                ...state.team2,
                name: action.payload.team2
             },
             turn: 'team1',
             stage: STAGES.game
           }
        case SET_STAGE:
            return {
                ...state,
                stage: action.payload
            } 
        default:
            return state
    }
}