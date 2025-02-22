// DATABASE
import { reactive } from "vue";

export const film = reactive({
  async getFilm(gendre) {
    return fetch("https://www.omdbapi.com/?apikey=61529aa0&s=" + gendre).then((response) =>
      response.json().then((movie) => {
        if (movie.Response === "False") {
          throw new Error(movie.Error);
        }
        return movie.Search;
      })
    );
  },
});

export const movieDetail = reactive({
  async getFilm(gendre) {
    return fetch("https://www.omdbapi.com/?apikey=61529aa0&i=" + gendre).then((response) =>
      response.json().then((movie) => {
        if (movie.Response === "False") {
          throw new Error(movie.Error);
        }
        return movie;
      })
    );
  },
});
