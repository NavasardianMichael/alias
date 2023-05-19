import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STAGES } from '../../../helpers/constants/pages'
import { setStage, setState } from '../../../store/actionCreators'
import styles from './header.module.css'
import { GAME_PARAMS } from '../../../helpers/constants/game'

function Header() {

    const dispatch = useDispatch()
    const teamsData = useSelector(state => ({
        team1: state.team1,
        team2: state.team2,
    }))
    const currentTurn = useSelector(state => state.turn)
    const currentTeamName = useSelector(state => state[state.turn].name)
    const [secondsLeft, setSecondsLeft] = useState(GAME_PARAMS.secondsPerRound)

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setSecondsLeft(prev => {
                        if(prev === 0) {
                            clearInterval(interval)
                            return 0
                        }
                        return prev - 1
                    })
                },
                1000
            )
            return () => {
                clearInterval(interval)
            }
        },
        []
    )

    useEffect(() => {
        if(secondsLeft > 0) return;

        if(currentTurn === 'team2') {
            const team1Points = teamsData.team1.correctWords.length;
            const team2Points = teamsData.team2.correctWords.length;
            if(team1Points >= GAME_PARAMS.pointsToWin || team2Points >= GAME_PARAMS.pointsToWin) {
                const action = setState({
                    stage: STAGES.results
                })
                dispatch(action)
                return;
            }
        }

        const action = setState({
            stage: STAGES.transition,
            turn: currentTurn === 'team1' ? 'team2' : 'team1'
        })
        dispatch(action)
    }, [secondsLeft])

    return (
        <div className={styles.header}>
            <p>{currentTeamName}</p>
            <p>{secondsLeft}</p>
        </div>
    )
}

export default Header