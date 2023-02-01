import { useState } from "react";
import Title from "./components/JSX/Title";

import ToDoList from "./components/JSX/ToDoList";
function App() {

  const [todoList, setTodoList] = useState([])

  const addToDo = (todo) => {
    setTodoList((prevState) => {
      return [...prevState, { text: todo, id: Math.random().toString() }]
    })
  }

  console.log(todoList);

  return (
    <div>
      <Title onAddTodoHandl={addToDo} />
      <ToDoList toDos={todoList} />
    </div>
  );
}

export default App;
