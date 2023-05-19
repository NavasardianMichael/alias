import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { STAGES } from "../../helpers/constants/pages"
import { setStage } from "../../store/actionCreators"
import styles from './transitionPage.module.css'
import { GAME_PARAMS } from "../../helpers/constants/game"

export const TransitionPage = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleNextRoundClick = () => {
        const action = setStage(STAGES.game)
        dispatch(action)
    }

    return (
        <div className={styles.transitionPage}>
            <p><b>{state.team1.name}</b>: {state.team1.correctWords.length} / {GAME_PARAMS.pointsToWin} միավոր</p>
            <p><b>{state.team2.name}</b>: {state.team2.correctWords.length} / {GAME_PARAMS.pointsToWin} միավոր</p>
            <p><b>հաջորդը՝</b> {state[state.turn].name} թիմի հերթն է</p>
            <Button 
                variant="contained"
                onClick={handleNextRoundClick}
            >
                Սկսել հաջորդ խաղափուլը
            </Button>
        </div>
    )
}