export function Button(props) {
  function handleButton() {
    if (props.children === "Dolar") {
      props.setValue(5.2);
      props.setCurrency(props.children);
      return;
    }

    if (props.children === "Libra") {
      props.setValue(6.37);
      props.setCurrency(props.children);
      return;
    }

    if (props.children === "Euro") {
      props.setValue(5.46);
      props.setCurrency(props.children);
      return;
    }
  }

  return (
    <button onClick={handleButton} className="btn btn-primary">
      {props.children}
    </button>
  );
}
