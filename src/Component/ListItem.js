export default function ListItem(props) {
  return (
    <ul>
      {props.todoList.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
