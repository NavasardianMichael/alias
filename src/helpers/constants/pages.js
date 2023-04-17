import GamePage from "../../components/GamePage/GamePage"
import { ResultsPage } from "../../components/ResultsPage/ResultsPage"
import StartPage from "../../components/StartPage/StartPage"
import { TransitionPage } from "../../components/TransitionPage/TransitionPage"

export const STAGES = {
    start: 'start',
    game: 'game',
    transition: 'transition',
    results: 'results',
}

export const PAGE_BY_STAGE = {
    [STAGES.start]: StartPage, 
    [STAGES.game]: GamePage, 
    [STAGES.transition]: TransitionPage, 
    [STAGES.results]: ResultsPage, 
}