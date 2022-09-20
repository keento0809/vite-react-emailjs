import { useState } from "react";
import "./App.css";
import Email from "./components/Email";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Vite react</h2>
      <Email />
    </div>
  );
}

export default App;
