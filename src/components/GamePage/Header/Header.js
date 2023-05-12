import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STAGES } from '../../../helpers/constants/pages'
import { setStage } from '../../../store/actionCreators'
import styles from './header.module.css'

function Header() {

    const dispatch = useDispatch()
    const currentTeamName = useSelector(state => state[state.turn].name)
    const [secondsLeft, setSecondsLeft] = useState(5)

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
        }, 
        []
    )

    useEffect(() => {
        if(secondsLeft > 0) return;
        const action = setStage(STAGES.transition)
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