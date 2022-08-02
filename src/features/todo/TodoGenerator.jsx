import "../../css/TodoGenerator.css";
import { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

function TodoGenerator(props) {
  const [listText, setListText] = useState("");

  const dispatch = useDispatch();
  const addClick = () => {
    setListText("");
    dispatch(addTodo(listText));
  };

  const textChange = (event) => {
    setListText(event.target.value);
  };
  return (
    <div className="todo-generator">
      <input value={listText} type="text" onChange={textChange} />
      <button onClick={addClick}>add</button>
    </div>
  );
}

export default TodoGenerator;
