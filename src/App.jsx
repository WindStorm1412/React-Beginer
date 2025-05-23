import TodoData from './components/todo/toda-data'
import TodoNew from './components/todo/todo-new'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />

      </div>
    </div>

  )
}

export default App
