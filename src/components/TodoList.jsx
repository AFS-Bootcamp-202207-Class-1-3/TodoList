import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "../css/TodoList.css"

function TodoList(){
    return (
        <div className="todo-list">
            <span>todoList</span>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}

export default TodoList;