const TodoData = (props) => {
    console.log("check", props)
    const { name } = props
    return (
        <div className='todo-data'>
            <div>My name is {name} </div>
            <div>Learning React</div>
        </div>
    )

}
export default TodoData