import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "../css/TodoList.css"
import { useState } from "react";

function TodoList(){
    const [todoList, settodoList] = useState([]);
    const updateList=(listText)=>{
        settodoList([...todoList, listText]);
    }
    return (
        <div className="todo-list">
            <span>todoList</span>
            <TodoGroup todoList={todoList}/>
            <TodoGenerator updateList={updateList}/>
        </div>
    );
}

export default TodoList;