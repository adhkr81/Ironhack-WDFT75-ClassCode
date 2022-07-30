import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function TrainingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState({});

  const [loading, setLoading] = useState(true);

  console.log(training);

  useEffect(() => {
    async function fetchTraining() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-fitness/${id}`
        );

        setTraining(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/error");
      }
    }

    fetchTraining();
  }, [id]);

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/react-fitness/${id}`);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return loading ? (
    <h1>Carregando</h1>
  ) : (
    <>
      <h1>Treino do {training.owner}</h1>
      <ul>
        <li>Objetivo: {training.goals}</li>
        <li>Grupo muscular: {training.muscleGroup}</li>
      </ul>
      {training.weekWorkout.segunda.map((currentExercise) => {
        return (
          <>
            <h2>{currentExercise.exercise}</h2>
            <p>Reps: {currentExercise.reps}</p>
            <p>Series: {currentExercise.series}</p>
          </>
        );
      })}

      <Link to={`/edit-training/${id}`} className="btn btn-primary">
        Editar
      </Link>

      <button onClick={handleDelete} className="btn btn-danger">
        Remover
      </button>
    </>
  );
}
