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
        <>
            <h1 style={{ textAlign: 'center' }}>
                {
                    winner ?
                    `Հաղթող է ճանաչվում ${winner} թիմը` :
                    'Խաղն ավարտվեց ոչ ոքի'
                }
            </h1>
            <img 
                src='https://img.freepik.com/free-vector/gamers-using-different-devices-playing-mobile-phone-tablet-laptop-console-cartoon-illustration_74855-14380.jpg'
                style={{width: '100%', marginTop: 32}} 
            />
        </>
    )
}