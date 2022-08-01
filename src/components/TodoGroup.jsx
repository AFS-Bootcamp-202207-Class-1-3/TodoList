import TodoItem from "./TodoItem";
import "../css/TodoGroup.css"

function TodoGroup() {
  return (
    <div className="todo-group">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoGroup;
