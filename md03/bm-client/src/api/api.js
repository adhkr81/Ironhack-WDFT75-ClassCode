import axios from "axios";

const apisURL = {
  development: "http://localhost:4000",
  production: "AQUI VCS VÃO COLOCAR A URL DA API DEPLOYADA NO HEROKU",
};

const api = axios.create({
  baseURL: apisURL[process.env.NODE_ENV],
});

export { api };
