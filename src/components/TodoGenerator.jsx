import "../css/TodoGenerator.css"

function TodoGenerator(){


const addClick=()=>{
    console.log('点击了')
}
    return (
        <div className="todo-generator">
            <input type="text" />
            <button onClick={addClick}>add</button>
        </div>
    );
}

export default TodoGenerator;