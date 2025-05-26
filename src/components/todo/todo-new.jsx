import { useState } from "react"

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Duong")
    const { addNewTodo } = props
    //  addNewTodo("WindStorm")
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
  
    }
    const handleOnchange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnchange(event.target.value) }}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>My name is {valueInput}</div>
        </div>
    )

}
export default TodoNew