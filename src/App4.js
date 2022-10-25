import "./App.css";

function handleMouseOver() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Voce passou o mouse";
}

function handleMouseLeave() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Voce tirou o mouse";
}

export default function App() {
  return (
    <div className="App">
      <strong
        onMouseOver={() => handleMouseOver()}
        onMouseLeave={() => handleMouseLeave()}
      >
        Passe o mouse aqui...
      </strong>

      <h1> </h1>
    </div>
  );
}
