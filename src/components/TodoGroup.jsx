import TodoItem from "./TodoItem";
import "../css/TodoGroup.css";

function TodoGroup(props) {
  const { todoList } = props;
        
  const todoItems=todoList.map((element, index)=> <TodoItem key={index} todoItemText={element}/>);
  return (
    <div className="todo-group">
      {todoItems}
    </div>
  );
}

export default TodoGroup;
