import { useState, useEffect } from "react";
import axios from "axios";

export function ExemploFilmes() {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=CHAVE DA API AQUI&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        );

        console.log(response);

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Exemplo filmes</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>

      {movies.map((currentMovie) => {
        return <h2>{currentMovie.original_title}</h2>;
      })}
    </>
  );
}
