import "./App.css";
import { sayHello } from "./sayHello";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSumbmit(e){
    e.preventDefault();
    console.log(e);
    setName(
      sayHello(e.target[0].value, () => {
        return Math.floor(Math.random() * 2);
      })
    )
    e.target[0].value = "";
  }

  return (
    <div className="App">
      <div id="showGreeting">{name}</div>
      <div id="container">
        <form onSubmit={handleSumbmit}>
          <label htmlFor="name">What is your name?</label>
          <input type="text" id="name" name="name" />
          <br />
          <br />
          <input type="submit" id="button" value="Confirm" className="btn"/>
        </form>
      </div>
    </div>
  );
}

export default App;
