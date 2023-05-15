import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray } from '../../../helpers/functions'
import styles from './wordsList.module.css'
import { setCorrectAnswers, setCorrectWord, undoCorrectWord } from '../../../store/actionCreators';
import { useEffect, useMemo, useState } from 'react';

function WordsList() {

    const dispatch = useDispatch()
    const currentTurn = useSelector(state => state.turn)
    const shuffledList = useSelector(state => shuffleArray(state.wordsLeft));
    const list = useMemo(() => shuffledList, [])
    const [page, setPage] = useState(0)
    const [correctWords, setCorrectWords] = useState([])

    const toggleWord = (e) => {
        const { name } = e.target
        if(correctWords.includes(name)) {
            setCorrectWords(prev => prev.filter(word => word !== name))
            return;
        }
        setCorrectWords(prev => ([...prev, name]))
    }

    useEffect(() => {
        if(correctWords.length === 5) {
            setPage(prev => prev + 1)
        }
    }, [correctWords])

    useEffect(() => {
        if(!currentTurn) return;
        const action = setCorrectAnswers(correctWords)
        dispatch(action)
    }, [currentTurn])

    return (
        <div className={styles.list} >
            {
                list.slice(page * 5, page * 5 + 5).map(word => {
                    return (
                        <Button 
                            key={word} 
                            variant="contained"
                            color={correctWords.includes(word) ? 'success' : 'info'}
                            endIcon={correctWords.includes(word) ? <CheckIcon/> : null}
                            name={word}
                            onClick={toggleWord}
                        >
                            {word}
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default WordsList