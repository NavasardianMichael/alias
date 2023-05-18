import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffleArray } from '../../../helpers/functions';
import { setCorrectAnswers } from '../../../store/actionCreators';
import styles from './wordsList.module.css';

function WordsList() {

    const dispatch = useDispatch()
    const shuffledList = useSelector(state => state.wordsLeft);
    const list = useMemo(() => shuffledList, [])
    const [page, setPage] = useState(0)
    const [correctWords, setCorrectWords] = useState([])
    const ref = useRef(correctWords.length)

    const toggleWord = (e) => {
        const { name } = e.target
        if(correctWords.includes(name)) {
            setCorrectWords(prev => prev.filter(word => word !== name))
            return;
        }
        setCorrectWords(prev => ([...prev, name]))
    }

    useEffect(() => {
        if(correctWords.length) {
            const action = setCorrectAnswers(correctWords);
            console.log({action});
            dispatch(action);
        }
        if(correctWords.length % 5 === 0) {
            setPage(prev => prev + 1)
        }
    }, [correctWords])

    return (
        <div className={styles.list} >
            {
                list.slice(page * 5, page * 5 + 5).map(word => {
                    return (
                        <Button 
                            key={word} 
                            variant="outlined"
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