import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
    // null default value
    const { todos, setTodos} = useState([
        'Go to the gym',
        'Eat more fruits and vege',
        'Learn React',
    ])

    return (
        <>
            <TodoInput />
            <TodoList todos={todos}/>
        </>
    )
}

export default App
