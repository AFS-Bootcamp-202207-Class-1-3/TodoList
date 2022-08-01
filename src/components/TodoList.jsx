import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "../css/TodoList.css"
import { useState } from "react";

function TodoList(){
    const [todoList, settodoList] = useState([]);
    const updateList=(listText)=>{
        let list=[...todoList, listText];
        settodoList(list);
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