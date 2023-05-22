import styles from './points.module.css'

function Points({ count }) {
    return (
        <div className={styles.points}>
            <p>միավոր՝ {count}</p>
        </div>
    )
}

export default Points