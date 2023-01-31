import styles from '../CSS/ToDoList.module.css'
import ToDo from './ToDo'

const ToDoList = () => {
    return (
        <div className={styles.todo}>
            <ul>
                <ToDo />
            </ul>
        </div>
    )
}
export default ToDoList