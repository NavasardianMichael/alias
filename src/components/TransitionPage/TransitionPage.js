import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { STAGES } from "../../helpers/constants/pages"
import { setStage } from "../../store/actionCreators"
import styles from './transitionPage.module.css'

export const TransitionPage = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleNextRoundClick = () => {
        const action = setStage(STAGES.game)
        dispatch(action)
    }
console.log(state.team1);
    return (
        <div className={styles.transitionPage}>
            <p><b>{state.team1.name}</b>: {state.team1.correctWords.length} point(s)</p>
            <p><b>{state.team2.name}</b>: {state.team2.correctWords.length} point(s)</p>
            <p><b>Next turn:</b> {state.turn}</p>
            <Button 
                variant="outlined"
                onClick={handleNextRoundClick}
            >
                PLay
            </Button>
        </div>
    )
}