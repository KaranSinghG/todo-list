import "./styles.css";
import InputItem from "./Component/InputItem";
import ListItem from "./Component/ListItem";

export default function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <InputItem />
      <ListItem />
    </div>
  );
}
