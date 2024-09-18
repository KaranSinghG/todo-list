import "./styles.css";
import InputItem from "./Component/InputItem";
import ListItem from "./Component/ListItem";
import { useState } from "react";

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <InputItem
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <ListItem todoList={todoList} />
    </div>
  );
}
