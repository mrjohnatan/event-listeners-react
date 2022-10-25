import "./App.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const button = document.querySelector("button");
    const input = document.querySelector("#input-task");
    const ul = document.querySelector("ul");

    button.addEventListener("click", () => {
      if (!input.value) {
        return;
      }
      const li = document.createElement("li");

      li.appendChild(document.createTextNode(input.value));

      ul.appendChild(li);

      input.value = "";
    });
  }, []);

  return (
    <div className="App">
      <input type="text" placefolder="Add nova tarefa" id="input-task" />

      <button>Clicar</button>

      <ul></ul>
    </div>
  );
}
