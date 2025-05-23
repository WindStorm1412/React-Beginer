const TodoNew = (props) => {
    const { addNewTodo } = props
    //  addNewTodo("WindStorm")
    const handleClick = () => {
        alert("click me")
    }
    const handleOnchange=(name)=>{
        console.log("WindStorm",name)
    }
    return (
        <div className='todo-new'>
            <input type="text" 
            onChange={(event)=>{handleOnchange(event.target.value)} }
            />
            <button 
            style={{cursor:"pointer"}}
            onClick={handleClick}
            >Add</button>
        </div>
    )

}
export default TodoNew