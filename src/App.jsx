import TodoData from './components/todo/toda-data'
import TodoNew from './components/todo/todo-new'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {
  const [todoList, setTodoList] = useState([{
    id: 1,
    name: "Duong",
    age: 22,
    address: "Can Tho",
    country: "Viet Nam"
  }, {
    id: 2,
    name: "WindStorm",
    age: 22,
    address: "Can Tho",
    country: "Viet Nam"
  }])
  const duongdz = "WindStorm"
  const age = 22
  const data = {
    address: "Can Tho",
    country: "Viet Nam"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={duongdz}
        age={age}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />

      </div>
    </div>

  )
}

export default App
