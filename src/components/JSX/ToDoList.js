import styles from '../CSS/ToDoList.module.css'
import ToDo from './ToDo'

const ToDoList = (props) => {

    console.log(props.toDos);

    return (
        <div className={styles.todo}>
            <ul>
                {props.toDos.map(task => (
                    <ToDo
                        key={task.id}
                        content={task.text}
                        onDelete={task.id}
                    />
                ))}
            </ul>
        </div>
    )
}
export default ToDoList