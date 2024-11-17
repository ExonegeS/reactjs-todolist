import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  let todos = [
      'Go to the gym',
      'Eat more fruits and vege',
      'Learn React',
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos}/>
    </>
  )
}

export default App
