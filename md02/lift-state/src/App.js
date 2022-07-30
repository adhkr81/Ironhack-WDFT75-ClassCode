import { Screen } from "./components/Screen";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(5.2);
  const [currency, setCurrency] = useState("Dolar");

  return (
    <div className="App">
      <Screen currency={currency} value={value} />
      <div className="d-flex justify-content-evenly">
        <Button setValue={setValue} setCurrency={setCurrency}>
          Dolar
        </Button>
        <Button setValue={setValue} setCurrency={setCurrency}>
          Euro
        </Button>
        <Button setValue={setValue} setCurrency={setCurrency}>
          Libra
        </Button>
      </div>
    </div>
  );
}

export default App;
