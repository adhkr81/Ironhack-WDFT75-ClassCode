// Nossos componentes React serão funções que retornam JSX (HTML).

import Button from "../Button";
import style from "./style.module.css";

function Navbar() {
  console.log(style);

  return (
    <ul className={style.container}>
      <li>
        <Button id="btn-home" class="red">
          Home
        </Button>
      </li>
      <li>
        <Button id="btn-about" class="green">
          Sobre mim
        </Button>
      </li>
      <li>
        <Button id="btn-contact" class="yellow">
          Contato
        </Button>
      </li>
    </ul>
  );
}

export default Navbar;
