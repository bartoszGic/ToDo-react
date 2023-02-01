
import styles from '../CSS/ToDo.module.css'
import { useState } from 'react'


const ToDo = (props) => {

    const [done, setDone] = useState(false)

    const checkHandl = () => {
        setDone(prevState => (!prevState))
    }

    const deleteHandl = () => {
        props.onDelete(props.deleteTodo.id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.toDo}>
                <div className={`${styles.task} ${done && styles.checked}`}>{props.content}</div>
                <div className={styles.btnsContainer}>
                    <button className={styles.checkBtn}
                        value={done}
                        onClick={checkHandl}>Check</button>
                    <button className={styles.editBtn}>Edit</button>
                    <button className={styles.deleteBtn}
                        onClick={deleteHandl}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo