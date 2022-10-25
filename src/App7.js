import { useRef } from "react";
import "./App.css";

export default function App() {
  let count = 0;
  const countRef = useRef(0);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);

  function incrementRef() {
    countRef.current += 1;
    spanRef.current.innerText = countRef.current;
  }

  function incrementLet() {
    count += 1;
    spanLetRef.current.innerText = count;
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => incrementRef()}>Icrementar useRef</button>
      </div>

      <div>
        <strong style={{ marginRight: "10px" }}>Valor do useRef</strong>
        <span ref={spanRef}> {countRef.current}</span>
      </div>

      <div>
        <button onClick={() => incrementLet()}>Icrementar Let</button>
      </div>

      <div>
        <strong style={{ marginRight: "10px" }}>Valor do let</strong>
        <span ref={spanLetRef}>{count}</span>
      </div>
    </div>
  );
}
