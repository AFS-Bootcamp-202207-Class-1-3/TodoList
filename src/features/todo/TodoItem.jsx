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
      <div onClick={deleteHandle}>
        {/* <span onClick={deleteHandle}>×</span> */}
        <svg t="1659488502328" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1550" width="20" height="20"><path d="M886.528 908.032c-28.096 28.096-73.856 28.096-102.016 0L138.304 261.824c-28.096-28.16-28.16-73.856 0-102.016 28.032-28.16 73.792-28.16 102.08 0l646.144 646.144C914.624 834.24 914.752 879.872 886.528 908.032L886.528 908.032zM885.76 261.504 239.616 907.648c-28.224 28.224-73.92 28.224-102.08 0-28.16-28.096-28.16-73.728 0.064-102.016L783.744 159.552c28.224-28.16 73.984-28.16 102.016-0.064C913.984 187.648 913.856 233.344 885.76 261.504L885.76 261.504z" p-id="1551" fill="#d81e06"></path></svg>
      </div>
    </div>
  );
}

export default TodoItem;
