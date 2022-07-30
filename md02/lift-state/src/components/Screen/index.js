export function Screen(props) {
  return (
    <>
      <h1>O real hoje vale:</h1>
      <strong>{props.value}</strong>
      <p>{props.currency}</p>
    </>
  );
}
