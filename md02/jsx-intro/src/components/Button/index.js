// Props são informações que um componente pode receber na hora que ele for invocado!
// Funcionam muito parecido com parametros de função
// As props sempre vem dentro de um objeto, que chamamos de props por padrão!

import style from "./style.module.css";
function Button(props) {
  console.log(props);

  return (
    <button className={style[props.class]} id={props.id}>
      {/* A props.children sempre se refere ao que está entre a tag de abertura e fechamento. O recheio do bagulho. */}
      {props.children}
    </button>
  );
}

export default Button;
