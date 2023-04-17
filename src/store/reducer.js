import { STAGES } from "../helpers/constants/pages"

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
    stage: STAGES.transition
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        // case value:
            
        //     break;
    
        default:
            return state
    }
}