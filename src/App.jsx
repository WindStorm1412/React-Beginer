import TodoData from './components/todo/toda-data'
import TodoNew from './components/todo/todo-new'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
const App = () => {
const duongdz="WindStorm"
const age= 22
const data={
  address:"Can Tho",
  country:"Viet Nam"
}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew />
      <TodoData
      name={duongdz}
      age={age}
      data={data}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />

      </div>
    </div>

  )
}

export default App
