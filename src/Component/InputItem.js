export default function InputItem() {
  function handleAdd() {
    console.log("Add Clicked");
  }

  return (
    <div>
      <input></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
