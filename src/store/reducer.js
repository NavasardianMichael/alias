import { STAGES } from "../helpers/constants/pages"
import { WORDS_LIST } from "../helpers/constants/words";
import { SET_CORRECT_ANSWERS, SET_CORRECT_WORD, SET_STAGE, SET_STATE, SET_USER_NAME, UNDO_CORRECT_WORD } from "./actionTypes"

const initialState = {
    wordsLeft: [...new Set(WORDS_LIST)],
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
        case SET_STATE: 
            return {
                ...state,
                ...action.payload
            }
        case SET_CORRECT_WORD:
            return {
                ...state,
                wordsLeft: state.wordsLeft.filter(word => word !== action.payload),
                [state.turn]: {
                    ...state[state.turn],
                    correctWords: [...state[state.turn].correctWords, action.payload]
                }
            }
        case UNDO_CORRECT_WORD:
            return {
                ...state,
                wordsLeft: [...state.wordsLeft, action.payload],
                [state.turn]: {
                    ...state[state.turn],
                    correctWords: state[state.turn].correctWords.filter(word => word !== action.payload)
                }
            }
        case SET_CORRECT_ANSWERS:
            const turn = state.turn;
            return {
                ...state,
                [turn]: {
                    ...state[turn],
                    correctWords: [...new Set([...state[turn].correctWords, ...action.payload])]
                },
                wordsLeft: state.wordsLeft.filter(word => !action.payload.includes(word))
            }
        default:
            return state
    }
}