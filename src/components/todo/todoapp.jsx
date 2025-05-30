import TodoData from './toda-data'
import TodoNew from './todo-new'
import './todo.css'
import ReactLogo from '../../assets/react.svg'
import { useState } from 'react'
const TodoApp = () => {
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
        </>
    )
}
export default TodoApp