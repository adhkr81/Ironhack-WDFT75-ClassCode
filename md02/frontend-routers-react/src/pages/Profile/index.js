import { Link, useParams } from "react-router-dom";

export function Profile() {
  const { userName } = useParams();

  return (
    <>
      <h1>Bem vindo, {userName}</h1>
      <Link to="/">Voltar</Link>
    </>
  );
}
