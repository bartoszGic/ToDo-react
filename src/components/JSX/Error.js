import styles from '../CSS/Error.module.css'
import Button from './Button'

const Error = (props) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <div className={styles.container}>
                <div className={styles.errorText}>
                    <h2>{props.msg}</h2>
                </div>
                <Button onClick={props.onConfirm}>Ok</Button>
            </div>
        </div>
    )
}
export default Error