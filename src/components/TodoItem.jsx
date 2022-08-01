import "../css/TodoItem.css";

function TodoItem(props) {
  const { todoItemText } = props;
  return (
    <div className="todo-item">
      <span>{todoItemText}</span>
    </div>
  );
}

export default TodoItem;
