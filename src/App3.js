import "./App.css";

export default function App() {
  function handleAddTask() {
    const input = document.querySelector("#input-task");
    const ul = document.querySelector("ul");

    if (!input.value) {
      return;
    }

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    input.value = "";
  }

  return (
    <div className="App">
      <input type="text" placefolder="Add nova tarefa" id="input-task" />

      <button onClick={() => handleAddTask()}> Clicar </button>

      <ul></ul>
    </div>
  );
}
