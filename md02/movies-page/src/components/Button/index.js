import { Link } from "react-router-dom";

export function Button(props) {
  return (
    <Link to={`/${props.path}`}>
      <button className="btn btn-primary">{props.children}</button>
    </Link>
  );
}
