import { Button, TextField } from '@mui/material'
import styles from './settings.module.css'

function Settings() {
    return (
        <div className={styles.settings}>
            <TextField label="Team 1 Name" variant="outlined" />
            <TextField label="Team 2 Name" variant="outlined" />
            <Button variant="contained">Let's PLay</Button>
        </div>
    )
}

export default Settings