// Importando o useState - hook que permite criar estados nos nossos componentes
import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  //Criando um estado:

  // O useState é uma função que retorna uma array com dois elementos:
  // O primeiro elemento é o valor inicial do meu estado
  // O segundo elemento vai ser uma função que vai ser responsável por atualizar o valor do meu estado
  // O useState recebe um parametro opcional, que é o valor inicial do meu estado
  const [counter, setCounter] = useState(0);

  function sum() {
    // counter++; Não podemos alterar o valor do estado diretamente
    // o setState, nesse caso setCounter é DESTRUTIVO, ele remove o valor anterior e colocar o novo valor passado como parametro
    setCounter(counter + 1);

    console.log(counter);
  }

  function sub() {
    // counter--; Não podemos alterar o valor do estado diretamente
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <div className="App">
      <h1>O numero do meu contador é: {counter}</h1>
      <Button operationType="+" operationFunction={sum}>
        Somar
      </Button>
      <Button operationType="-" operationFunction={sub}>
        Subtrair
      </Button>
    </div>
  );
}

export default App;
