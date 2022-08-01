import "../css/TodoGenerator.css";
import { useState } from "react";
function TodoGenerator(props) {
  const { updateList } = props;
  const addClick = () => {
    updateList(listText);
  };
  const textChange = (event) => {
    setListText(event.target.value);
  };
  const [listText, setListText] = useState("");
  return (
    <div className="todo-generator">
      <input value={listText} type="text" onChange={textChange} />
      <button onClick={addClick}>add</button>
    </div>
  );
}

export default TodoGenerator;
