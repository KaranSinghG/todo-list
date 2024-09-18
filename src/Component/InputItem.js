import { useRef } from "react";
export default function InputItem(props) {
  const inputRef = useRef(null);

  const handleAdd = () => {
    props.setTodoList([...props.todoList, props.todoInput]);
    props.setTodoInput("");
    inputRef.current.focus();
  };
  const onChange = (e) => {
    props.setTodoInput(e.target.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={props.todoInput || ""}
        onChange={onChange}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
