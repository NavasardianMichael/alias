import { useSelector } from 'react-redux'
import styles from './points.module.css'

function Points() {

    const currentTeamPoints = useSelector(state => state[state.turn].correctWords.length)

    return (
        <div className={styles.points}>
            <p>միավոր՝ {currentTeamPoints}</p>
        </div>
    )
}

export default Points