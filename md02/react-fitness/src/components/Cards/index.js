import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://qph.fs.quoracdn.net/main-qimg-be02b90414c951fc22a8117f62b2bf05-lq"
        class="card-img-top"
        alt="Crisão minha paixão!"
      />
      <div class="card-body">
        <h5 class="card-title">{`Treino do ${props.owner}`}</h5>
        <Link to={`/training/${props.id}`} class="btn btn-primary">
          Veja o treino completo!
        </Link>
      </div>
    </div>
  );
}
