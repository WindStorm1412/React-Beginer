import TodoData from './components/todo/toda-data'
import TodoNew from './components/todo/todo-new'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {
  const getRandomArbitrary=(min, max)=> {
    return Math.random() * (max - min) + min;
}
  const [todoList, setTodoList] = useState([ ])

  const addNewTodo = (name) => {
    const newTodo={
      id: getRandomArbitrary(1, 100000000),
      name: name,
     
    }
    setTodoList([...todoList, newTodo])

  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
  
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />

      </div>
    </div>

  )
}

export default App
