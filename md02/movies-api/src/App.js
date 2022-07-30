import axios from "axios";

function App() {
  // Lidando com Promises + Axios com async/await

  async function fetchMovies() {
    // Normalmente combinamos  o async/await com try catch
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  fetchMovies();

  // Lidando com Promises + Axios com Then/Catch
  // const response = axios.get(
  //   "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  // );

  // response
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // console.log(response);

  return <div className="App"></div>;
}

export default App;
