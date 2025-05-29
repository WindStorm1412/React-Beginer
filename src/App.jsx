import TodoData from './components/todo/toda-data'
import TodoNew from './components/todo/todo-new'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
import HeaderPage from './components/layout/header'
import Footer from './components/layout/footer'
const App = () => {
  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: getRandomArbitrary(1, 100000000),
      name: name,

    }
    setTodoList([...todoList, newTodo])

  }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter((todo) => {
      return todo.id != id

    })
    setTodoList(newTodo)

  }

  return (
    <>
    <HeaderPage/>
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addNewTodo={addNewTodo}

      />
      {todoList.length === 0 ?
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' />

        </div> : <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />}




    </div>
    <Footer/>
    
    </>


  )
}

export default App
