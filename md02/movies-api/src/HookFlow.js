import { useState, useEffect } from "react";

export function HookFlow() {
  const [state, setState] = useState(0);
  const [stateString, setStateString] = useState("Valor inicial");

  useEffect(() => {
    console.log("Componente montado/atualizado");
  }, [state]);

  // Sem array = toda montagem/atualização
  // Com array vazia = apenas na montagem
  // Array com variavel dentro = invoca a callback na montagem e toda vez que aquela variavel muda de valor

  return (
    <>
      <h1>Hook flow</h1>

      <h2>{state}</h2>

      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Atualizar o state!
      </button>

      <h2>{stateString}</h2>
      <button
        onClick={() => {
          setStateString("Valor atualizado");
        }}
      >
        Atualizar o stateString
      </button>
    </>
  );
}
