import { useParams } from "react-router-dom";
import movies from "../../assets/movies";
import { Button } from "../../components/Button";

export function MoviePage() {
  const { movieTitle } = useParams();

  console.log(movieTitle);

  return (
    <>
      {movies
        .filter((currentMovie) => {
          return currentMovie.original_title === movieTitle;
        })
        .map((currentMovie) => {
          return (
            <>
              <h1>{currentMovie.original_title}</h1>
              <p>{currentMovie.overview}</p>
              <ul>
                <li>
                  Popularidade: <strong>{currentMovie.popularity}</strong>
                </li>
                <li>
                  Data de lançamento:{" "}
                  <strong>{currentMovie.release_date}</strong>
                </li>
              </ul>
            </>
          );
        })}

      <Button path="">Voltar</Button>
    </>
  );
}
