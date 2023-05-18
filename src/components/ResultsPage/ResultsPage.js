import { useSelector } from "react-redux"

export const ResultsPage = () => {

    const team1Data = useSelector(state => state.team1)
    const team2Data = useSelector(state => state.team2)

    const detectWinnder = () => {
        if(team1Data.correctWords.length > team2Data.correctWords.length) return team1Data.name
        if(team1Data.correctWords.length < team2Data.correctWords.length) return team2Data.name
        return false
    }
    const winner = detectWinnder()

    return (
        <h1>
            {
                winner ?
                `The winnder is ${winner}` :
                'Draw'
            }
        </h1>
    )
}