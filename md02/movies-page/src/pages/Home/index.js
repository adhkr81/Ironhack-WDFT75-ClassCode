import movies from "../../assets/movies";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <>
      {movies.map((currentMovie) => {
        return (
          <>
            <Card
              original_title={currentMovie.original_title}
              overview={currentMovie.overview}
              img={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`}
            >
              <Button path={currentMovie.original_title}>Saiba mais!</Button>
            </Card>
          </>
        );
      })}
    </>
  );
}
