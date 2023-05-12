import { useSelector } from "react-redux"

export const TransitionPage = () => {

    const state = useSelector(state => state)

    return (
        <>
            <p>{state.team1.name}: {state.team1.correctWords.length}</p>
            <p>{state.team2.name}: {state.team2.correctWords.length}</p>
            <p>Next turn: {state.turn === 'team1' ? 'team2' : 'team1'}</p>
        </>
    )
}