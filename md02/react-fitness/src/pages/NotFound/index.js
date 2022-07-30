import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>Essa pagina não existe</h1>
      <Link to="/" className="btn btn-primary">
        Vá para o inicio!
      </Link>
    </>
  );
}
