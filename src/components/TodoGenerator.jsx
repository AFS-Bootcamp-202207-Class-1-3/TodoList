import "../css/TodoGenerator.css";
import { useState } from "react";
function TodoGenerator(props) {
  const [listText, setListText] = useState("");
  const { updateList } = props;
  const addClick = () => {
    updateList(listText);
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
