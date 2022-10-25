import "./App.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
      console.log("Obotão foi clicado...");
    });
  }, []);

  return (
    <div className="App">
      <button>Clicar</button>
    </div>
  );
}
