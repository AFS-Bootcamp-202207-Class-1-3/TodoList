import "../../css/TodoItem.css";
import { deleteTodo, doneTodo } from "../todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoItem(props) {
  const { id, done, todoItemText } = props;

  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(doneTodo(id));
  };

  const deleteHandle = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-item">
      <div>
        <span
          onClick={clickHandle}
          className={done === false ? "no-done-text" : "done-text"}
        >
          {todoItemText}
        </span>
      </div>
      <div>
        <span onClick={deleteHandle}>×</span>
      </div>
    </div>
  );
}

export default TodoItem;
