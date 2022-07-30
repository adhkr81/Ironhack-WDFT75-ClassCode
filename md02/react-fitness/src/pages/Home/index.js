import { Link } from "react-router-dom";
import { Card } from "../../components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    async function fetchTrainings() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/react-fitness"
      );

      setTrainings([...response.data]);
    }

    fetchTrainings();
  }, []);

  return (
    <>
      <h1>React Training</h1>
      <p>NO PAIN NO GAIN</p>

      <Link to="/create-training">
        <button className="btn btn-primary">Criar um treino</button>
      </Link>

      <h2>Treinos da comunidade:</h2>

      {trainings.map((currentTraining) => {
        return <Card owner={currentTraining.owner} id={currentTraining._id} />;
      })}
    </>
  );
}
