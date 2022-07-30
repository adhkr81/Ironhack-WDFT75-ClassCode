export function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        alt={props.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.original_title}</h5>
        <p className="card-text">{props.overview}</p>
        {props.children}
      </div>
    </div>
  );
}
