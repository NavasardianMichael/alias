import { Button, TextField } from '@mui/material'
import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../store/actionCreators'
import styles from './settings.module.css'

function Settings() {

    const dispatch = useDispatch()
    const [userNames, setUserNames] = useState({
        team1: '',
        team2: ''
    })

    const handleUserNameChange = (e) => {
        const { name, value } = e.target
        
        setUserNames(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleStartGameClick = () => {
        const action = setUserData(userNames)
        dispatch(action)
    }

    return (
        <div className={styles.settings}>
            <TextField 
                label="առաջին թիմի անունը"
                name='team1'
                variant="outlined"
                value={userNames.team1}
                onChange={handleUserNameChange} 
            />
            <TextField 
                label="երկրորդ թիմի անունը"
                name='team2' 
                variant="outlined" 
                value={userNames.team2}
                onChange={handleUserNameChange}
            />
            <Button 
                variant="contained"
                onClick={handleStartGameClick}
                disabled={!userNames.team1 || !userNames.team2}
                style={{ textTransform: 'none' }}
            >
                Սկսել խաղը
            </Button>
        </div>
    )
}

export default Settings