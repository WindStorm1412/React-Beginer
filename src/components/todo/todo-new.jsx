import { useState } from "react"

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Duong")
    const { addNewTodo } = props
    //  addNewTodo("WindStorm")
    const handleClick = () => {
        console.log("WindStorm", valueInput)
    }
    const handleOnchange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnchange(event.target.value) }}
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