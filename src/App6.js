import { useRef } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef(null);
  const ulRef = useRef(null);

  function handleTask() {
    if (!inputRef.current.value) {
      return;
    }

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(inputRef.current.value));
    ulRef.current.appendChild(li);

    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <input type="text" placeholder="Add uma nova tarefa" ref={inputRef} />

      <button onClick={() => handleTask()}>Clicar</button>

      <ul ref={ulRef}></ul>
    </div>
  );
}
