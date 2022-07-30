export function Button(props) {
  const { operationType, operationFunction, children } = props;
  console.log(operationType);

  // operationType === props.operationType

  //Não podemos escrever if tradicional dentro do JSX
  //Quando a gente precisa fazer uma rederização condicional, a gente usa o IF TERNARIO

  // condição ? valor_se_verdadeiro : valor_se_falso

  return (
    <button
      type="button"
      className={operationType === "+" ? "btn btn-success" : "btn btn-danger"}
      onClick={operationFunction}
    >
      {children}
    </button>
  );
}
