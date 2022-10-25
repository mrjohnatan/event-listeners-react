import "./App.css";

export default function App() {
  function handleInput(event) {
    const h1 = document.querySelector("h1");
    h1.innerText = event.target.value;
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Digite uma mensagem"
        onInput={(event) => handleInput(event)}
      />
      <h1> </h1>
    </div>
  );
}
