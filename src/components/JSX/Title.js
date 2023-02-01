import { useState } from 'react'
import styles from '../CSS/Title.module.css'
import Button from './Button'
import Error from './Error'

const Title = (props) => {

    const [task, setTask] = useState('')
    const [err, setErr] = useState()

    const addToDo = (e) => {
        e.preventDefault()
        if (task.trim().length === 0) {
            setErr('Podaj treść zadania!')
            return
        }
        props.onAddTodoHandl(task)
        setTask('')
    }

    const onChangeHandl = (e) => {
        setTask(e.target.value)
    }
    const errorHandl = () => {
        setErr(null)
    }

    return (
        <div>
            {err && <Error msg={err} onConfirm={errorHandl} />}
            < div className={styles.container} >
                <h1>ToDo App</h1>
                <form onSubmit={addToDo}>
                    <label htmlFor='sentence'>To Do:</label>
                    <input id='sentence' type='text'
                        value={task}
                        onChange={onChangeHandl}></input>
                    <Button type='submit'>Add</Button>
                </form>
            </div >
        </div>
    )
}

export default Title