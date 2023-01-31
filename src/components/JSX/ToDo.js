
import styles from '../CSS/ToDo.module.css'


const ToDo = () => {


    return (
        <div className={styles.container}>
            <div className={styles.toDo}>
                <div className={styles.task}>Wynieść śmieci</div>
                <div className={styles.btnsContainer}>
                    <button className={styles.checkBtn}>Check</button>
                    <button className={styles.editBtn}>Edit</button>
                    <button className={styles.deleteBtn}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo